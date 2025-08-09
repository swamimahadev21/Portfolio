document.addEventListener('DOMContentLoaded', function() {

    // --- PRELOADER ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // --- MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuButton.querySelector('i').classList.toggle('fa-bars');
        mobileMenuButton.querySelector('i').classList.toggle('fa-times');
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuButton.querySelector('i').classList.add('fa-bars');
            mobileMenuButton.querySelector('i').classList.remove('fa-times');
        });
    });

    // --- TYPING EFFECT ---
    if (document.querySelector('.typing-effect')) {
        new Typed('.typing-effect', {
            strings: ['Passionate Developer', 'Cybersecurity Enthusiast', 'Future Leader'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        });
    }

    // --- SCROLL ANIMATIONS ---
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    scrollElements.forEach(el => {
        observer.observe(el);
    });

    // --- PARTICLES.JS BACKGROUND ---
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#0d9488" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#0d9488", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
            "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });

    // --- CONTACT FORM SUBMISSION ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // --- IMPORTANT ---
        // 1. Create a Google Form with fields for "Name", "Email", and "Message".
        // 2. Get the pre-filled link for your form.
        // 3. Replace the placeholder URL below with your Google Form's pre-filled link.
        const googleFormUrl = "YOUR_GOOGLE_FORM_PREFILLED_LINK_HERE";

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // --- IMPORTANT ---
        // Replace these with the correct entry IDs from your pre-filled link.
        const nameEntryId = "entry.XXXXXXXXXX"; 
        const emailEntryId = "entry.YYYYYYYYYY";
        const messageEntryId = "entry.ZZZZZZZZZZ";

        if (googleFormUrl === "YOUR_GOOGLE_FORM_PREFILLED_LINK_HERE") {
             alert("Please update the script.js file with your Google Form link and entry IDs.");
             return;
        }

        const finalUrl = `${googleFormUrl.split('?')[0]}?usp=pp_url&${nameEntryId}=${encodeURIComponent(name)}&${emailEntryId}=${encodeURIComponent(email)}&${messageEntryId}=${encodeURIComponent(message)}`;

        // We can submit this in the background, but opening a new tab is simpler and ensures the user knows it went through.
        window.open(finalUrl, '_blank');

        alert("Thank you! Your message has been submitted.");
        contactForm.reset();
    });

});
