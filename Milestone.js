// Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.querySelector('.nav-links-mobile');
    
    hamburgerBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
    });