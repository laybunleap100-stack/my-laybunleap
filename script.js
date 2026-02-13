const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

themeToggle.addEventListener('click', () => {
    const isDark = body.hasAttribute('data-theme');
    if (isDark) {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

menu.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    menu.classList.toggle('is-active');
});

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
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