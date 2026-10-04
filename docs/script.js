const saludos = ["Hi", "Hola", "Ciao", "Salut", "Hoi", "Olá"];
let idx = 0;
let lang = "en"; // default language
let intervalId = null;

// Theme logic
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const themeKey = 'theme';
let theme = localStorage.getItem(themeKey) || (prefersDark ? 'dark' : 'light');

function applyTheme() {
  document.documentElement.classList.remove('theme-light', 'theme-dark');
  document.documentElement.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  document.getElementById('theme-switch').textContent = theme === 'dark' ? '☀️' : '🌙';
}

document.getElementById('theme-switch').addEventListener('click', function() {
  theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(themeKey, theme);
  applyTheme();
});

applyTheme();

// Language logic
function switchLang() {
  lang = lang === "en" ? "es" : "en";
  document.getElementById('main-text-en').style.display = lang === "en" ? "inherit" : "none";
  document.getElementById('main-text-es').style.display = lang === "es" ? "inherit" : "none";
  document.getElementById('lang-switch').textContent = lang === "en" ? "[ES]" : "[EN]";
  idx = 0;
  clearInterval(intervalId);
  startSaludoInterval();
}

document.getElementById('lang-switch').addEventListener('click', function(e) {
  e.preventDefault();
  switchLang();
});

function startSaludoInterval() {
  intervalId = setInterval(() => {
    idx = (idx + 1) % saludos.length;
    const saludoSpan = document.getElementById('saludo');
    if (saludoSpan) saludoSpan.textContent = saludos[idx];
  }, 1000);
}

startSaludoInterval();

// Watermelon position toggle
document.querySelector('.watermelon').addEventListener('click', function() {
  this.classList.toggle('left');
});
