(function () {
  const storageKey = 'cwc-theme';
  const buttonSelector = '.theme-toggle';

  function applyTheme(theme) {
    document.body.classList.remove('theme-blue', 'theme-pink');
    document.body.classList.add(theme === 'pink' ? 'theme-pink' : 'theme-blue');

    const button = document.querySelector(buttonSelector);
    if (button) {
      button.setAttribute('aria-pressed', String(theme === 'pink'));
      button.textContent = theme === 'pink' ? '🌊 Blue Theme' : '🌸 Pink Theme';
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(storageKey);
    const theme = savedTheme === 'pink' ? 'pink' : 'blue';
    applyTheme(theme);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();

    const button = document.querySelector(buttonSelector);
    if (button) {
      button.addEventListener('click', function () {
        const currentTheme = document.body.classList.contains('theme-pink') ? 'pink' : 'blue';
        const nextTheme = currentTheme === 'pink' ? 'blue' : 'pink';
        localStorage.setItem(storageKey, nextTheme);
        applyTheme(nextTheme);
      });
    }
  });
})();
