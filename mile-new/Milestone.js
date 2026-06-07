/* ══════════════════════════════════════
   STICKY HEADER — scroll shadow
══════════════════════════════════════ */
window.addEventListener('scroll', () => {
    const header = document.querySelector('.sticky-header');
    if (header) {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});


/* ══════════════════════════════════════
   HAMBURGER MENU
══════════════════════════════════════ */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.querySelector('.nav-links-mobile');

if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}
