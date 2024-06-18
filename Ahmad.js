document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ffa500';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#FFD700';
        });
    });
});
