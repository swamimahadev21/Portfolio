document.addEventListener('DOMContentLoaded', function() {

    // --- PARTICLES.JS BACKGROUND ---
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00f7ff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.4, "random": true },
            "size": { "value": 2, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#00f7ff", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 1, "direction": "none", "out_mode": "out" }
        },
        "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false } } },
        "retina_detect": true
    });

    // --- HEADER SCROLL EFFECT ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- SCROLL-TRIGGERED ANIMATIONS ---
    const scrollElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .about-text, .about-image, .certificate-card, .inspiration-card, .book-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // --- MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuButton.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });

    // --- MODAL LOGIC ---
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('modal-close-btn');
    const interactiveCards = document.querySelectorAll('.interactive-card');

    interactiveCards.forEach(card => {
        card.addEventListener('click', () => {
            const contentSource = card.querySelector('.modal-content-source');
            if (contentSource) {
                modalBody.innerHTML = contentSource.innerHTML;
                modal.classList.add('active');
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
    };

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

});
