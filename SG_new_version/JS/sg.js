//   < !--preloader scripts-- >

        // JavaScript to handle the preloader
        document.addEventListener('DOMContentLoaded', function () {
            const preloaderWrapper = document.querySelector('.preloader-wrapper');
        const content = document.querySelector('.content');

        // Show the preloader
        document.querySelector('.loader').style.display = 'block';

        // Simulate content loading delay
        window.addEventListener('load', function () {
            // Hide the preloader after the content has loaded
            preloaderWrapper.style.display = 'none';
        content.style.display = 'block';
            });
        });

        // scroll animation>>>>>>
    // AOS.init();

// active page color 
    document.addEventListener('DOMContentLoaded', function() {
        const currentUrl = window.location.pathname;
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            if (currentUrl.includes(linkPath)) {
                link.classList.add('active-page');
            }
        });
    });


    // for form validation >>contact form
    
