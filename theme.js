(function () {
  const storageKey = 'cwc-theme';
  const buttonSelector = '.theme-toggle';

  function applyTheme(theme) {
    document.body.classList.remove('theme-dark', 'theme-soft');
    document.body.classList.add(theme === 'soft' ? 'theme-soft' : 'theme-dark');

    const button = document.querySelector(buttonSelector);
    if (button) {
      button.setAttribute('aria-pressed', String(theme === 'soft'));
      button.textContent = theme === 'soft' ? '🌙 Dark Theme' : '🌿 Soft Theme';
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(storageKey);
    const theme = savedTheme === 'soft' ? 'soft' : 'dark';
    applyTheme(theme);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();

    const button = document.querySelector(buttonSelector);
    if (button) {
      button.addEventListener('click', function () {
        const currentTheme = document.body.classList.contains('theme-soft') ? 'soft' : 'dark';
        const nextTheme = currentTheme === 'soft' ? 'dark' : 'soft';
        localStorage.setItem(storageKey, nextTheme);
        applyTheme(nextTheme);
      });
    }
  });
})();
