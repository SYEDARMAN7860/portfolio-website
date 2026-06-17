// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.background = '#0d1117';
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.6)';
    } else {
        header.style.background = '#161b22';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    }
});

// Reveal sections on scroll
const sections = document.querySelectorAll('section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles for animation
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.8s ease';
});

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// Typing effect for hero title
const title = document.querySelector('.hero-content h2');

if (title) {
    const text = "Software Engineer";
    let index = 0;
    title.textContent = "";

    function typeEffect() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 120);
        }
    }

    typeEffect();
}

// Current year in footer
const footer = document.querySelector('footer p');

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} ARMAN ALAM | Software Engineer`;
}