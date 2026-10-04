// Loaded in <head> so the theme is applied before the page is painted (avoids a flash of the wrong theme).
(function () {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = storedTheme === 'dark' || (!storedTheme && prefersDark) ? 'dark' : 'light';
  document.documentElement.classList.add('theme-' + theme);
})();
