function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth',
            });

            const navbar = document.querySelector('.navbar');
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        }
    });
});

window.addEventListener('resize', () => {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');

    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
    } else if (window.innerWidth <= 768 && navToggle) {
        navbar.classList.remove('active');
    }
});
