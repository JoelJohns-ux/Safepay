    // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const navOverlay = document.getElementById('nav-overlay');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;

    function toggleMobileMenu() {
        menuToggle.classList.toggle('menu-open');
        navOverlay.classList.toggle('active');
        navMenu.classList.toggle('active');

        if (navMenu.classList.contains('active')) {
            body.style.overflow = 'hidden'; // prevent scrolling
        } else {
            body.style.overflow = 'auto'; // allow scrolling
        }
    }

    menuToggle.addEventListener('click', toggleMobileMenu);
    navOverlay.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking on links (for single page applications)
    const menuLinks = document.querySelectorAll('#nav-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            menuToggle.classList.remove('menu-open');
            body.style.overflow = 'auto';
        }
    });
    
     // FAQ accordion functionality
    function toggleFAQ(element) {
        const content = element.querySelector('.faq-content');
        const icon = element.querySelector('.rotate-icon');
        
        content.classList.toggle('open');
        icon.classList.toggle('rotated');
    }