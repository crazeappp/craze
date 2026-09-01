// ── Navbar scroll state ─────────────────────────────────────
const navEl = document.getElementById('siteNav');
if (navEl) {
  const setScrolled = () => navEl.classList.toggle('scrolled', window.scrollY > 30);
  setScrolled();
  window.addEventListener('scroll', setScrolled);
}

// ── Mobile hamburger ─────────────────────────────────────────
const ham = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if (ham && mobileNav) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open');
    mobileNav.classList.remove('open');
  }));
}

// ── Scroll reveal ─────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
}

// ── FAQ accordion ───────────────────────────────────────────
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  if (!q) return;
  q.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ── Contact form (static demo) ───────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message sent ✓';
    btn.style.opacity = '0.75';
    setTimeout(() => { btn.textContent = original; btn.style.opacity = '1'; contactForm.reset(); }, 2400);
  });
}
