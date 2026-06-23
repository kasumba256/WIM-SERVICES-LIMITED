 /* ── Sticky header scroll shadow ── */
        const stickyHeader = document.getElementById('stickyHeader');
        window.addEventListener('scroll', () => {
            stickyHeader.classList.toggle('scrolled', window.scrollY > 10);
        }, { passive: true });
 
        /* ── Hamburger / mobile drawer ──
           Self-contained so it works even if "About Us.js" fails to load
           (filenames with spaces can fail on some servers).            */
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileNav    = document.getElementById('mobileNav');
 
        function openDrawer() {
            mobileNav.classList.add('active');
            hamburgerBtn.setAttribute('aria-expanded', 'true');
            hamburgerBtn.setAttribute('aria-label', 'Close navigation menu');
            const s = hamburgerBtn.querySelectorAll('span');
            s[0].style.transform = 'translateY(11px) rotate(45deg)';
            s[1].style.opacity   = '0';
            s[2].style.transform = 'translateY(-11px) rotate(-45deg)';
        }
        function closeDrawer() {
            mobileNav.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            hamburgerBtn.setAttribute('aria-label', 'Open navigation menu');
            const s = hamburgerBtn.querySelectorAll('span');
            s[0].style.transform = '';
            s[1].style.opacity   = '';
            s[2].style.transform = '';
        }
 
        hamburgerBtn.addEventListener('click', () => {
            mobileNav.classList.contains('active') ? closeDrawer() : openDrawer();
        });
 
        /* Close drawer when any link is tapped */
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeDrawer);
        });
 
        /* Close drawer if viewport grows to desktop width */
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 901) closeDrawer();
        });