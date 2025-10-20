// ================= Theme Toggle =================
const toggle = document.getElementById('theme-toggle');
const body = document.body;
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

function setTheme(isLight) {
  body.classList.toggle('light', isLight);
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  moonIcon.style.display = isLight ? 'block' : 'none';
  sunIcon.style.display = isLight ? 'none' : 'block';
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'light');

// Toggle theme on click
toggle.addEventListener('click', () => {
  const isLight = !body.classList.contains('light');
  setTheme(isLight);
});


// ================= Loader Animation =================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('fade-out');
    document.querySelectorAll('.hidden').forEach(el => {
      el.classList.add('visible');
      body.scrollTo(-200)
    });
  }, 800);
});

// ================= Scroll Animations =================
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));


setTimeout(() => {
  loader.classList.add('fade-out');
  document.querySelectorAll('.hidden').forEach(el => {
    el.classList.add('visible');
  });
}, 800);