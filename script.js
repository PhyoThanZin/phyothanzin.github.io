// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true      // Animation happens only once
});
