// Hero buttons active state handler
document.addEventListener('DOMContentLoaded', function() {
    const heroButtons = document.querySelectorAll('.hero-buttons a');
    if (!heroButtons.length) return;

    const currentFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

    const targetFileFor = (button) => {
        const href = (button.getAttribute('href') || '').trim();
        if (!href || href.startsWith('#')) return 'index.html';
        return href.split('/').pop().split('#')[0].toLowerCase();
    };

    // Set active button based on current page.
    heroButtons.forEach(btn => btn.classList.remove('active'));
    const matchedButton = Array.from(heroButtons).find(btn => targetFileFor(btn) === currentFile);
    if (matchedButton) {
        matchedButton.classList.add('active');
    } else {
        heroButtons[0].classList.add('active');
    }
    
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
