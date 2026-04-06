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

    // Intersection Observer — scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
 
  document.querySelectorAll('.reveal, .reveal-right, .value-card, .stat-item').forEach(el => {
    observer.observe(el);
  });
 
  // Counter animation for stats
  function animateCounter(el, target, suffix = '', duration = 1800) {
    let start = 0;
    const isUGX = suffix.includes('UGX');
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = isUGX
        ? 'UGX ' + Math.floor(start) + 'B+'
        : Math.floor(start) + suffix;
    }, 16);
  }
 
  // Trigger counters when stats section enters view
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const nums = entry.target.querySelectorAll('.stat-num');
        const data = [
          { el: nums[0], val: 12,  suffix: '+' },
          { el: nums[1], val: 150, suffix: '+' },
          { el: nums[2], val: 25,  suffix: '+' },
          { el: nums[3], val: 15,  suffix: '', ugx: true }
        ];
        data.forEach(d => {
          if (d.ugx) {
            animateCounter(d.el, d.val, 'UGX', 1800);
          } else {
            animateCounter(d.el, d.val, d.suffix, 1600);
          }
        });
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
 
  statsObserver.observe(document.getElementById('stats'));
