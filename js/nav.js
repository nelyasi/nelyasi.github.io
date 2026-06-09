/* ============================================================
   js/nav.js  —  Scroll progress bar, hamburger, active nav links
   ============================================================ */

/* ── Scroll progress bar ── */
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  if (!progressBar) return;
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  progressBar.style.width = pct + '%';
});

/* ── Mobile hamburger ── */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-mobile').classList.toggle('open');
});

document.querySelectorAll('.nav-mobile a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-mobile').classList.remove('open');
  });
});

/* ── Active nav link on scroll ── */
const navLinks = document.querySelectorAll('.nav-links a');

document.querySelectorAll('section[id], header[id]').forEach(section => {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a =>
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id)
        );
      }
    });
  }, { threshold: .35 }).observe(section);
});

/* ── Trigger fade-ups on initial load ── */
window.addEventListener('load', () => {
  const ob = new IntersectionObserver(entries => {
    entries.forEach(x => {
      if (x.isIntersecting) { x.target.classList.add('visible'); ob.unobserve(x.target); }
    });
  }, { threshold: .08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => ob.observe(el));
});
