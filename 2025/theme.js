document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = document.querySelectorAll('#theme-switcher button');
  const htmlElement = document.documentElement;

  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.dataset.theme;
      setActiveButton(theme); // Highlight the clicked button
      htmlElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  });

  const savedTheme = localStorage.getItem('theme');
  let initialTheme = savedTheme || 'cow'; // Default to 'cow' if no saved theme
  htmlElement.setAttribute('data-theme', initialTheme);
  setActiveButton(initialTheme); // Highlight the initial theme button

  function setActiveButton(theme) {
    themeButtons.forEach(button => {
      button.classList.remove('active'); // Remove 'active' class from all buttons
      if (button.dataset.theme === theme) {
        button.classList.add('active'); // Add 'active' class to the current button
      }
    });
  }
});


/*FADE IN SCRIPT*/
    document.addEventListener("DOMContentLoaded", function () {
      const fadeInSections = document.querySelectorAll(".fade");

      const fadeInOnScroll = () => {
        const viewportHeight = window.innerHeight;
        const thresholdTop = viewportHeight * 0.1; // top 10% of viewport
        const thresholdBottom = viewportHeight * 0.9; // bottom 10% of viewport

    fadeInSections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      // Calculate opacity based on position in viewport
      let opacity = 0;

      if (rect.top >= thresholdTop && rect.bottom <= thresholdBottom) {
        // Element is fully within the central 80% of the viewport
        opacity = 1;
        section.style.transform = "translateY(0)";
      } else if (rect.top < thresholdBottom && rect.bottom > thresholdTop) {
        // Element is in the outer 10% at the top or bottom - gradually fade
        if (rect.top < thresholdTop) {
          // Fading out towards the top of viewport
          opacity = (rect.bottom - thresholdTop) / (viewportHeight * 0.25);
        } else if (rect.bottom > thresholdBottom) {
          // Fading out towards the bottom of viewport
          opacity = (thresholdBottom - rect.top) / (viewportHeight * 0.25);
        }
      }

      // Apply calculated opacity to the element
      section.style.opacity = Math.max(0, Math.min(1, opacity));
    });
  };

  // Initial check in case elements are already in view
  fadeInOnScroll();

  // Run fadeInOnScroll on scroll
  window.addEventListener("scroll", fadeInOnScroll);
});



/*animals animate */

document.addEventListener('DOMContentLoaded', () => {
  const themeSwitcher = document.getElementById('theme-switcher');
  if (!themeSwitcher) return;

  const buttons = themeSwitcher.querySelectorAll('button');
  const initialMargins = []; // Will store initial margin-right values

  // --- Configuration ---
  const endScroll = 400; // Scroll position (in pixels) where animation completes
  // --- End Configuration ---

  // 1. Store initial margin-right values ONCE on load
  buttons.forEach(button => {
    const computedStyle = window.getComputedStyle(button);
    // *** CHANGE HERE: Get marginRight instead of marginLeft ***
    const margin = parseInt(computedStyle.marginRight, 10) || 0;
    initialMargins.push(margin);
  });

  // 2. Create the scroll event handler function
  function handleScroll() {
    const currentScroll = window.scrollY;
    const scrollFraction = Math.max(0, Math.min(1, currentScroll / endScroll));

    // 3. Update margin for each button based on scroll progress
    buttons.forEach((button, index) => {
      const initialMargin = initialMargins[index];

      // This check might be less relevant if all buttons start with margin-right
      // but harmless to keep.
      if (initialMargin === 0) return;

      // Calculation logic remains the same: reduce margin towards 0
      const newMargin = initialMargin * (1 - scrollFraction);

      // *** CHANGE HERE: Set marginRight instead of marginLeft ***
      button.style.marginRight = `${newMargin}px`;
    });
  }

  // 4. Attach the event listener
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Optional: Run once on load
  // handleScroll();
});



