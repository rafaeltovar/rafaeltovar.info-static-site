const saludos = ["Hi", "Hola", "Ciao", "Salut", "Hoi", "Olá"];
let idx = 0;
let lang = "en"; // default language
let intervalId = null;

const langSwitch = document.getElementById('lang-switch');
const themeSwitch = document.getElementById('theme-switch');
const watermelon = document.querySelector('.watermelon');

// Page title and accessible labels for the icon-only buttons, per language
const labels = {
  en: { title: "Home - Rafael Tovar", lang: "Cambiar a español", dark: "Switch to dark theme", light: "Switch to light theme", watermelon: "Move the watermelon" },
  es: { title: "Principal - Rafael Tovar", lang: "Switch to English", dark: "Cambiar a tema oscuro", light: "Cambiar a tema claro", watermelon: "Mover la sandía" }
};

function updateLabels() {
  langSwitch.setAttribute('aria-label', labels[lang].lang);
  themeSwitch.setAttribute('aria-label', theme === 'dark' ? labels[lang].light : labels[lang].dark);
  watermelon.setAttribute('aria-label', labels[lang].watermelon);
}

// Theme logic (the initial theme is applied by theme-init.js)
const themeKey = 'theme';
let theme = document.documentElement.classList.contains('theme-dark') ? 'dark' : 'light';

function applyTheme() {
  document.documentElement.classList.remove('theme-light', 'theme-dark');
  document.documentElement.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  themeSwitch.textContent = theme === 'dark' ? '☀️' : '🌙';
  updateLabels();
}

themeSwitch.addEventListener('click', function() {
  theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(themeKey, theme);
  applyTheme();
});

applyTheme();

// Language logic: show only the elements whose lang attribute matches the current language
function switchLang() {
  lang = lang === "en" ? "es" : "en";
  document.documentElement.lang = lang;
  document.title = labels[lang].title;
  document.querySelectorAll('body [lang]').forEach(function(el) {
    el.hidden = el.lang !== lang;
  });
  langSwitch.textContent = lang === "en" ? "[ES]" : "[EN]";
  updateLabels();
  idx = 0;
  clearInterval(intervalId);
  startSaludoInterval();
}

langSwitch.addEventListener('click', switchLang);

function startSaludoInterval() {
  intervalId = setInterval(() => {
    idx = (idx + 1) % saludos.length;
    const saludoSpan = document.getElementById('saludo');
    if (saludoSpan) saludoSpan.textContent = saludos[idx];
  }, 1000);
}

startSaludoInterval();

// Watermelon position toggle
watermelon.addEventListener('click', function() {
  this.classList.toggle('left');
});
