// ============================================
// MODERN CV DIGITAL - INTERACTIVE FEATURES
// ============================================

// === NAVIGATION ===
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect will be handled in optimizedScrollHandler

// Hamburger menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// === MOBILE BOTTOM NAVIGATION ===
const mobileBottomNav = document.getElementById('mobileBottomNav');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

// Smooth scroll for mobile nav
mobileNavItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = window.innerWidth <= 768 ? 100 : 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Haptic feedback on mobile
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        }
    });
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Adjust offset for mobile
            const offset = window.innerWidth <= 768 ? 100 : 80;
            const offsetTop = target.offsetTop - offset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
            
            // Haptic feedback on mobile
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        }
    });
});

// === ACTIVE NAVIGATION LINK ===
const sections = document.querySelectorAll('.section, .hero-section');

// === BACK TO TOP BUTTON ===
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Haptic feedback on mobile
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });
}

// === INTERSECTION OBSERVER FOR ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections with delayed animation
document.querySelectorAll('.section').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(section);
});

// === SKILL TAGS ANIMATION ===
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.05}s`;
});

// === PROJECT CARDS HOVER EFFECT ===
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// === TIMELINE ANIMATION ===
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    timelineObserver.observe(item);
});

// === STATS COUNTER ANIMATION ===
const stats = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const isPlus = target.includes('+');
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
    
    let current = 0;
    const increment = numericTarget / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
            current = numericTarget;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(current);
        if (isPlus) displayValue += '+';
        if (isPercentage) displayValue += '%';
        
        element.textContent = displayValue;
    }, stepTime);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            animateCounter(entry.target);
        }
    });
}, {
    threshold: 0.5
});

stats.forEach(stat => {
    statsObserver.observe(stat);
});

// === LANGUAGE LEVEL BARS ANIMATION ===
const levelBars = document.querySelectorAll('.level-bar');

const levelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
        }
    });
}, {
    threshold: 0.5
});

levelBars.forEach(bar => {
    levelObserver.observe(bar);
});

// === PARALLAX EFFECT FOR HERO ===
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// === CURSOR TRAIL EFFECT (OPTIONAL) ===
const createCursorTrail = () => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.cursor-circle');
    
    if (circles.length === 0) return;
    
    circles.forEach((circle, index) => {
        circle.x = 0;
        circle.y = 0;
    });
    
    window.addEventListener('mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    
    const animateCircles = () => {
        let x = coords.x;
        let y = coords.y;
        
        circles.forEach((circle, index) => {
            circle.style.left = x - 12 + 'px';
            circle.style.top = y - 12 + 'px';
            circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
            
            circle.x = x;
            circle.y = y;
            
            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    };
    
    animateCircles();
};

// === TYPING EFFECT FOR HERO SUBTITLE (OPTIONAL) ===
const typingEffect = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// === PRELOADER (OPTIONAL) ===
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// === SCROLL REVEAL ANIMATIONS ===
const revealElements = document.querySelectorAll('.about-card, .skill-category-card, .project-card, .info-card, .contact-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// === INTERACTIVE SKILL TAGS ===
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.transform = 'scale(1.1)';
        setTimeout(() => {
            tag.style.transform = 'scale(1)';
        }, 200);
    });
});

// === COPY EMAIL TO CLIPBOARD ===
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.textContent || link.href.replace('mailto:', '');
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                showNotification('Email copié dans le presse-papier!');
            });
        }
    });
});

// === NOTIFICATION SYSTEM ===
const showNotification = (message, duration = 3000) => {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInUp 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
};

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(100%);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideOutDown {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(100%);
        }
    }
`;
document.head.appendChild(style);

// === PERFORMANCE OPTIMIZATION ===
let ticking = false;

const updateScrollElements = () => {
    // Update scroll-dependent elements here
    ticking = false;
};

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateScrollElements);
        ticking = true;
    }
});

// === DARK MODE TOGGLE (OPTIONAL - ALREADY DARK BY DEFAULT) ===
const createDarkModeToggle = () => {
    const toggle = document.createElement('button');
    toggle.className = 'dark-mode-toggle';
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.style.cssText = `
        position: fixed;
        bottom: 5rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 12px;
        background: rgba(30, 41, 59, 0.8);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(100, 116, 139, 0.2);
        color: #f1f5f9;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        z-index: 999;
        transition: all 0.3s ease;
    `;
    
    // Document.body.appendChild(toggle); // Uncomment if you want dark mode toggle
};

// === EASTER EGG: KONAMI CODE ===
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        showNotification('🎉 Konami Code activé! Vous avez trouvé le secret!', 5000);
        document.body.style.animation = 'rainbow 2s infinite';
    }
});

// === LOADING ANIMATION FOR IMAGES ===
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    if (img.complete) {
        img.style.opacity = '1';
    } else {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    }
});

// === LOG CONSOLE MESSAGE ===
console.log('%c🚀 Bienvenue sur mon CV Digital!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c💼 Développé par Ghali Lahlou', 'font-size: 14px; color: #8b5cf6;');
console.log('%c📧 Contact: ghallahlou26@gmail.com', 'font-size: 12px; color: #06b6d4;');

// === MOBILE OPTIMIZATIONS ===

// Prevent double-tap zoom on iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Improve touch scrolling
if ('ontouchstart' in window) {
    document.body.style.overflow = 'auto';
    document.body.style.WebkitOverflowScrolling = 'touch';
}

// Optimize animations on mobile
const isMobile = window.innerWidth <= 768;
if (isMobile) {
    // Reduce animation complexity on mobile
    const animatedElements = document.querySelectorAll('.gradient-orb');
    animatedElements.forEach(orb => {
        orb.style.animationDuration = '30s';
    });
    
    // Disable parallax on mobile
    window.removeEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = 'none';
        }
    });
}

// === PERFORMANCE OPTIMIZATION ===
// Debounce scroll events for mobile
let ticking = false;
const optimizedScrollHandler = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Update active nav links
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });

            mobileNavItems.forEach(item => {
                item.classList.remove('active');
                const href = item.getAttribute('href');
                if (href === `#${current}` || (current === '' && href === '#hero')) {
                    item.classList.add('active');
                }
            });

            // Navbar scroll effect
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Back to top button
            if (backToTop) {
                if (window.pageYOffset > 500) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            }

            ticking = false;
        });
        ticking = true;
    }
};

// Replace scroll listeners with optimized version
window.removeEventListener('scroll', () => {});
window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

// === CV DROPDOWN MENU ===
function initCVDropdowns() {
    const cvDropdowns = document.querySelectorAll('.cv-dropdown');
    
    console.log('Initializing CV dropdowns, found:', cvDropdowns.length);

    cvDropdowns.forEach((dropdown, index) => {
        const btn = dropdown.querySelector('.cv-dropdown-btn');
        
        console.log(`Dropdown ${index}:`, dropdown, 'Button:', btn);
        
        if (btn) {
            // Remove any existing listeners
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            newBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Dropdown button clicked!');
                
                // Close other dropdowns
                cvDropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                const isActive = dropdown.classList.contains('active');
                if (isActive) {
                    dropdown.classList.remove('active');
                    console.log('Dropdown closed');
                } else {
                    dropdown.classList.add('active');
                    console.log('Dropdown opened');
                }
            });
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.cv-dropdown')) {
            cvDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Close dropdown when clicking on a link
    document.querySelectorAll('.cv-dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            console.log('CV link clicked:', item.href);
            cvDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            // Let the download happen
        });
    });
}

// === INITIALIZE ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('CV Digital chargé avec succès!');
    
    // Initialize CV dropdowns
    initCVDropdowns();
    
    // Initialize mobile bottom nav
    if (window.innerWidth <= 768 && mobileBottomNav) {
        mobileBottomNav.classList.add('active');
    }
    
    // Handle resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768 && mobileBottomNav) {
            mobileBottomNav.classList.add('active');
        } else if (mobileBottomNav) {
            mobileBottomNav.classList.remove('active');
        }
    });
});
