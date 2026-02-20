const canvas = document.getElementById('heatmapCanvas');
const ctx = canvas.getContext('2d');

// --- Configuration ---
const resolution = 2;        // Try 2 or 4. (4 is highly recommended for performance)
const brushRadius = 50;      // Massive brush for the wide gradient
const coolingRate = 0.003;   // Very slow cooling
const maxHeat = 1.0; 

let cols, rows;
let grid = [];
let mouseX = -1000;
let mouseY = -1000;
let lastMouseX = -1000;
let lastMouseY = -1000;

// --- Detect Light/Dark Mode for Muted Colors ---
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// Pastels for light mode, deep jewel tones for dark mode
const saturation = isDarkMode ? 65 : 80; 
const lightness = isDarkMode ? 20 : 80;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cols = Math.ceil(canvas.width / resolution);
  rows = Math.ceil(canvas.height / resolution);
  
  grid = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
}

window.addEventListener('resize', resize);
resize();

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

window.addEventListener('mouseout', () => {
  mouseX = -1000; 
  mouseY = -1000;
  lastMouseX = -1000;
  lastMouseY = -1000;
});

// Stamps heat onto a specific X and Y coordinate
function applyHeatStamp(x, y) {
  const centerCol = Math.floor(x / resolution);
  const centerRow = Math.floor(y / resolution);
  
  // Only calculate blocks within our brush radius
  const blockRadius = Math.ceil(brushRadius / resolution);

  for (let i = -blockRadius; i <= blockRadius; i++) {
    for (let j = -blockRadius; j <= blockRadius; j++) {
      const col = centerCol + i;
      const row = centerRow + j;

      if (col >= 0 && col < cols && row >= 0 && row < rows) {
        // Distance in terms of actual pixels
        const distance = Math.sqrt((i * resolution) ** 2 + (j * resolution) ** 2);
        
        if (distance <= brushRadius) {
          const appliedHeat = 1 - (distance / brushRadius);
          grid[col][row] = Math.max(grid[col][row], appliedHeat);
        }
      }
    }
  }
}

// Fills the gaps if the mouse moved fast between frames
function interpolateMousePath() {
  // If the mouse just entered the screen, don't draw a line from nowhere
  if (lastMouseX === -1000 || mouseX === -1000) {
    applyHeatStamp(mouseX, mouseY);
    return;
  }

  const dx = mouseX - lastMouseX;
  const dy = mouseY - lastMouseY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  // Calculate how many stamps we need to fill the gap seamlessly
  // Stamping every half-radius guarantees perfectly smooth overlaps
  const stepSize = Math.max(1, brushRadius / 2);
  const steps = Math.ceil(distance / stepSize);

  for (let i = 0; i <= steps; i++) {
    const interpX = lastMouseX + (dx * (i / steps));
    const interpY = lastMouseY + (dy * (i / steps));
    applyHeatStamp(interpX, interpY);
  }
}

// The main animation loop
function draw() {
  interpolateMousePath();
  
  // Save the current position for the next frame's gap calculation
  lastMouseX = mouseX;
  lastMouseY = mouseY;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      
      let heat = grid[col][row];

      if (heat > 0) {
        // --- The Non-Linear Math ---
        // By applying an exponent of 1.8, high heat values (0.8 - 1.0) mathematically 
        // stay closer to 0 (Red) much longer before shifting to purple (280)
        const curve = Math.pow(1 - heat, 1.8);
        const hue = curve * 280; 
        
        // Stays fully solid until the very end, then fades smoothly into the background
        const alpha = Math.min(heat * 4, 1);
        
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
        ctx.fillRect(col * resolution, row * resolution, resolution, resolution);

        grid[col][row] -= coolingRate;
        if (grid[col][row] < 0) grid[col][row] = 0;
      }
    }
  }

  requestAnimationFrame(draw);
}

draw();