// Hero buttons active state handler
document.addEventListener('DOMContentLoaded', function() {
    const heroButtons = document.querySelectorAll('.hero-buttons a');
    
    // Add click event listener to each button
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent default navigation for hash links
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
            }
            
            // Remove active class from all buttons
            heroButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
});
