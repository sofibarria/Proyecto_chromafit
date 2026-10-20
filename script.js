// Sticky Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Partículas dinámicas en el fondo del Hero
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(246, 239, 234, 0.4)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${10 + Math.random() * 10}s infinite ease-in-out`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Contador animado para estadísticas
const counters = document.querySelectorAll('.counter');
let animated = false;

const runCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 50;
        const updateCount = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight;
    const statsSection = document.querySelector('.social-proof');
    if (statsSection && scrollPos >= statsSection.offsetTop + 100 && !animated) {
        runCounters();
        animated = true;
    }
});

// Soporte de tap para flip cards en dispositivos táctiles móviles
const flipCards = document.querySelectorAll('.service-card-flip');
flipCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('touch-flipped');
    });
});