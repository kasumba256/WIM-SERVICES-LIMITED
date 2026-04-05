// Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.querySelector('.nav-links-mobile');
    
    hamburgerBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
      });
    });

     // ── Subtle zoom-in on load ──
    window.addEventListener('load', () => {
      document.getElementById('hero').classList.add('loaded');
    });

    // ── Navbar becomes solid on scroll ──
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ── Parallax on background ──
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const bg = document.getElementById('heroBg');
      if (scrolled < window.innerHeight) {
        bg.style.transform = `scale(1) translateY(${scrolled * 0.25}px)`;
      }
    });