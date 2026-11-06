const THEME_STORAGE_KEY = 'cellar-keeper-theme';

export function initializeThemeToggle() {
  const button = document.getElementById('theme-toggle');
  const root = document.documentElement;
  let theme = 'light';

  try {
    theme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
  } catch (error) {
    console.warn('Could not read the saved theme preference.', error);
  }

  const applyTheme = () => {
    const isDark = theme === 'dark';
    root.dataset.theme = theme;
    button.textContent = isDark ? '☀️' : '🌙';
    button.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
    button.title = `Switch to ${isDark ? 'light' : 'dark'} theme`;
  };

  button.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.warn('Could not save the theme preference.', error);
    }
  });

  applyTheme();
}
