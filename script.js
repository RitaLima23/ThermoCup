// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
