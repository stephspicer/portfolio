 // Configuration values here!!!
      const spacing = 25; // How many pixels the resolution of the grid is
      const amplitude = 15; // How many pixels the sine wave will offset from the grid by
      const period = 7.5; // How many grid units a wave period spans
      const mouseRange = 250; // How many pixels away the mouse affects the grid on a bezier curve
      const animationSeconds = 6; // How many seconds it takes for the animation to loop. 0 for no animation
      const lineColor = "#4A4464"; // Any CSS color for the grid to draw
      const lineWidth = .5;

      const resolution = 1; // Whole numbers >= 1. The render resolution. 



       const canvas = document.getElementById("grid-canvas");
      const ctx = canvas.getContext("2d");

      // Register mouse position in canvas coordinates
      let mouseX = -1000;
      let mouseY = -1000;
      window.addEventListener("mousemove", (event) => {
        mouseX = event.clientX - canvas.getBoundingClientRect().left;
        mouseY = event.clientY - canvas.getBoundingClientRect().top;
      });

      // Function to draw a single wave
      function drawWave(
        isHorizontal,
        offset,
        canvasWidth,
        canvasHeight,
        animationOffset
      ) {
        const length = isHorizontal ? canvasWidth : canvasHeight;

        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        if (isHorizontal) {
          ctx.moveTo(0, offset);
        } else {
          ctx.moveTo(offset, 0);
        }
        // Loop through the length of the line in our resolution units
        for (
          let i = resolution - spacing;
          i <= length + spacing;
          i += resolution
        ) {
          // Determine distance from mouse to point on the line (un-sine-waved)
          // Good old pythogorean theorem
          let mouseProximity = isHorizontal
            ? Math.sqrt(Math.pow(mouseX - i, 2) + Math.pow(mouseY - offset, 2))
            : Math.sqrt(Math.pow(mouseX - offset, 2) + Math.pow(mouseY - i, 2));

          // Convert pixel distance to relative units of our mouseRange config field
          mouseProximity = mouseProximity / mouseRange;

          // Invert the proximity for the bezier curve so that 1 is directly on the point, 0 is mouseRange or further away
          if (mouseProximity > 1) {
            mouseProximity = 1;
          } else if (mouseProximity < 0) {
            mouseProximity = 0;
          }
          mouseProximity -= 1;
          mouseProximity *= -1;

          // Calculate the amplitude we want to use with a bezier curve of mouse distance times max amplitude
          const curve =
            mouseProximity * mouseProximity * (3 - 2 * mouseProximity);
          const amp = curve * amplitude;

          // Actually draw the line
          const functionalPeriod = spacing * period;
          if (isHorizontal) {
            ctx.lineTo(
              i,
              Math.sin((Math.PI * i - animationOffset) / functionalPeriod) *
                amp +
                offset
            );
          } else {
            ctx.lineTo(
              Math.sin((Math.PI * i - animationOffset) / functionalPeriod) *
                amp +
                offset,
              i
            );
          }
        }
        ctx.stroke();
      }

      function draw(time) {
        // Default to not animating, if animation seconds is set then compute where in the animation cycle we are
        let animationOffset = 0;
        if (animationSeconds > 0) {
          const timeSeconds = time / 1000;
          const animationFraction =
            (timeSeconds % animationSeconds) / animationSeconds;
          animationOffset =
            Math.PI * 2 * (period * spacing) * animationFraction;
        }

        // Detect if the canvas element has changed size so we can update resolution to match
        const canvasWidth = canvas.clientWidth;
        canvas.width = canvasWidth;
        const canvasHeight = canvas.clientHeight;
        canvas.height = canvasHeight;

        // Clear the screen
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Compute how many columns we have and the starting column offset
        const columns = Math.floor(canvasWidth / spacing);
        let columnOffset = (canvasWidth % spacing) / 2;

        // Draw the columns, offset by our spacing
        for (
          let i = columnOffset;
          columnOffset <= canvasWidth;
          columnOffset += spacing
        ) {
          drawWave(
            false,
            columnOffset,
            canvasWidth,
            canvasHeight,
            animationOffset
          );
        }

        // Compute how many rows we have and the starting row offset
        const rows = Math.floor(canvasHeight / spacing);
        let rowOffset = canvasHeight % spacing;

        // Draw the rows, offset by our spacing
        for (
          let i = rowOffset;
          rowOffset <= canvasHeight;
          rowOffset += spacing
        ) {
          drawWave(true, rowOffset, canvasWidth, canvasHeight, animationOffset);
        }

        // Queue up another animation frame at the browser's discresion (typically screen refresh, which is usually 60hz)
        requestAnimationFrame(draw);
      }
      requestAnimationFrame(draw);