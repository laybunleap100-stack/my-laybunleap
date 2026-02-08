const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

menu.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
  menu.classList.toggle('is-active');
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

navLinks.forEach(n => n.addEventListener('click', () => {
  menuLinks.classList.remove('active');
  menu.classList.remove('is-active');
}));