document.addEventListener('DOMContentLoaded', function() {
    const printBtn = document.querySelector('.print-btn');
    
    printBtn.addEventListener('click', function() {
        window.print();
    });

    const navLinks = document.querySelectorAll('.contact-item');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#1a7a7a';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });
});
