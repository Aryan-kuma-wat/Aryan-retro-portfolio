// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Play a blip sound on navigation
        playSound('blip.mp3');

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Mobile menu toggle
const navToggle = document.createElement('button');
navToggle.innerText = '☰';
navToggle.classList.add('nav-toggle');
document.querySelector('nav').prepend(navToggle);

navToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('active');

    // Play a menu toggle sound
    playSound('toggle.mp3');
});

// Simple form validation for the contact section
const contactEmail = document.querySelector('a[href^="mailto:"]');
contactEmail.addEventListener('click', (e) => {
    const email = prompt("Enter your email to continue:");

    if (email && !validateEmail(email)) {
        alert("Invalid email! Please enter a valid email address.");
        e.preventDefault();
    } else {
        // Play a success sound
        playSound('success.mp3');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function playSound(filename) {
    const audio = new Audio(filename);
    audio.play();
}