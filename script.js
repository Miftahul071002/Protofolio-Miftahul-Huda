// Animasi scroll
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Efek navbar saat scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15,23,42,0.95)';
  } else {
    navbar.style.background = 'rgba(15,23,42,0.8)';
  }

  // Toggle hamburger menu
const toggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Tutup menu setelah klik link
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
});
