const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const themeToggle = document.getElementById('theme-toggle');

// Toggle navigation menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close the menu when a nav link is clicked
navLinks.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
});

// Dark mode toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙'; // Change icon
});


