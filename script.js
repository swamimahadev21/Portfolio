document.addEventListener('DOMContentLoaded', function() {

    // --- SMOOTH PRELOADER ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 2000); // Keep preloader for 2 seconds
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

    // --- MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuButton.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    // --- TYPING EFFECT ---
    if (document.querySelector('.typing-effect')) {
        new Typed('.typing-effect', {
            strings: ['Cybersecurity Analyst', 'Defense Strategist', 'Digital Protector'],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true,
            smartBackspace: true
        });
    }

    // --- SCROLL-TRIGGERED ANIMATIONS ---
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    scrollElements.forEach(el => observer.observe(el));

    // --- CONTACT FORM SUBMISSION ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // --- IMPORTANT ---
        // Replace with your actual Google Form pre-filled link.
        const googleFormUrl = "YOUR_GOOGLE_FORM_PREFILLED_LINK_HERE";

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // --- IMPORTANT ---
        // Replace with the correct entry IDs from your pre-filled link.
        const nameEntryId = "entry.XXXXXXXXXX"; 
        const emailEntryId = "entry.YYYYYYYYYY";
        const messageEntryId = "entry.ZZZZZZZZZZ";

        if (googleFormUrl === "YOUR_GOOGLE_FORM_PREFILLED_LINK_HERE") {
             alert("Developer: Please update the script.js file with your Google Form link and entry IDs.");
             return;
        }

        const finalUrl = `${googleFormUrl.split('?')[0]}?usp=pp_url&${nameEntryId}=${encodeURIComponent(name)}&${emailEntryId}=${encodeURIComponent(email)}&${messageEntryId}=${encodeURIComponent(message)}`;

        window.open(finalUrl, '_blank');
        alert("Thank you! Your message has been submitted via Google Forms.");
        contactForm.reset();
    });
});
