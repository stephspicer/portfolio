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
