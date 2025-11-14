// ============================================
// CV DIGITAL - SCRIPT MINIMAL
// ============================================

// === MOBILE MENU ===
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const headerNav = document.getElementById('headerNav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        headerNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Fermer le menu mobile quand on clique sur un lien
const navLinks = document.querySelectorAll('.header-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerNav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === BACK TO TOP BUTTON ===
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// === INTERSECTION OBSERVER POUR ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les cards et sections
const observeElements = document.querySelectorAll(
    '.profile-card, .skill-category, .timeline-item, .project-card, .info-card'
);
observeElements.forEach(el => observer.observe(el));

// === ANIMATION DES BARRES DE LANGUES ===
const languageBars = document.querySelectorAll('.language-bar');

const languageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            languageObserver.unobserve(bar);
        }
    });
}, {
    threshold: 0.5
});

languageBars.forEach(bar => languageObserver.observe(bar));

// === ACTIVE NAV LINK ===
const sections = document.querySelectorAll('.section');
const navLinksActive = document.querySelectorAll('.header-nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksActive.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary)';
        }
    });
});

// === CONSOLE MESSAGE ===
console.log('%c👋 Bienvenue sur mon CV Digital!', 'font-size: 16px; font-weight: bold; color: #0366d6;');
console.log('%c💼 Développé par Ghali Lahlou', 'font-size: 12px; color: #586069;');
console.log('%c📧 Contact: ghallahlou26@gmail.com', 'font-size: 10px; color: #6a737d;');

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('CV Digital chargé avec succès!');
});

