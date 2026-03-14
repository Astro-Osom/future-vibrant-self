/* =============================================
   FUTURE VIBRANT SELF — Main JS
   ============================================= */

// --- NAVBAR: Add 'scrolled' class on scroll ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// --- FADE-IN ON SCROLL (Intersection Observer) ---
const fadeEls = document.querySelectorAll(
  '#what-we-do .container, #bio .container, #products .container, #join .container'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// --- EMAIL FORM: Basic submission handler ---
// Replace action URL with your Mailchimp/ConvertKit endpoint
const emailForm = document.querySelector('.email-form');
if (emailForm) {
  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailForm.querySelector('input[type="email"]').value;
    if (email) {
      // TODO: Replace with actual form submission (Mailchimp, ConvertKit, etc.)
      console.log('Email captured:', email);
      emailForm.innerHTML = '<p style="font-family:\'Inter\',sans-serif;font-weight:700;font-size:1.2rem;">You\'re in. Quest begins soon.</p>';
    }
  });
}

// --- HERO VIDEO: Ensure autoplay on mobile ---
const heroVideo = document.getElementById('hero-video');
if (heroVideo) {
  heroVideo.play().catch(() => {
    // Autoplay blocked, video stays paused (acceptable fallback)
    console.log('Autoplay prevented by browser. Video paused.');
  });
}
