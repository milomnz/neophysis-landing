const toggleButton = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');
const navLinks = document.querySelectorAll('.navbar__link');

if (toggleButton && menu) {
  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('navbar__link--active'));
    link.classList.add('navbar__link--active');
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });
});

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 100;
  navLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (!section) return;
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach((item) => item.classList.remove('navbar__link--active'));
      link.classList.add('navbar__link--active');
    }
  });
});
