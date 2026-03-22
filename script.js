const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

// Toggle Mobile Menu
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close Menu
function closeMenu() {
    mobileMenu.classList.add('hidden');
}

// Active Scroll Highlighting
window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});