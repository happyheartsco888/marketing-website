/* ============================================================
   Happy Hearts Co. — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV SCROLL EFFECT ── */
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* ── MOBILE NAV TOGGLE ── */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ── ACTIVE NAV LINK ── */
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (currentPath === href || currentPath.startsWith(href + '/') || currentPath.startsWith(href + '?'))) {
      a.classList.add('active');
    }
  });

  /* ── SCROLL REVEAL ── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target); // Animate once
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .stat-item').forEach(el => {
    revealObserver.observe(el);
  });

  /* ── TESTIMONIAL DRAG-TO-SCROLL ── */
  const track = document.getElementById('testiTrack');
  const dots  = document.querySelectorAll('.tdot');

  if (track) {
    const cards = track.querySelectorAll('.testi-card');
    let isDragging = false, startX = 0, scrollLeft = 0;

    track.addEventListener('mousedown', e => {
      isDragging = true;
      track.classList.add('dragging');
      startX     = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => { isDragging = false; track.classList.remove('dragging'); });
    track.addEventListener('mouseup',    () => { isDragging = false; track.classList.remove('dragging'); });
    track.addEventListener('mousemove',  e => {
      if (!isDragging) return;
      e.preventDefault();
      const x    = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });

    // Update dots on scroll
    track.addEventListener('scroll', () => {
      if (cards.length === 0) return;
      const cardW = cards[0].offsetWidth + 24; // gap
      const index = Math.round(track.scrollLeft / cardW);
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
    });

    // Dot click → scroll to card
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        if (cards.length === 0) return;
        const cardW = cards[0].offsetWidth + 24;
        track.scrollTo({ left: parseInt(dot.dataset.index) * cardW, behavior: 'smooth' });
      });
    });
  }

  /* ── FAQ ACCORDION ── */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (q) {
      q.addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        // Toggle clicked
        if (!wasOpen) item.classList.add('open');
      });
    }
  });

  /* ── CONTACT FORM SUBMIT ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Simulate send (replace with Netlify Forms or Formspree)
      setTimeout(() => {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = '#25a865';
        contactForm.reset();
        setTimeout(() => {
          btn.textContent = orig;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }

  /* ── VENDOR FORM SUBMIT ── */
  const vendorForm = document.getElementById('vendorForm');
  if (vendorForm) {
    vendorForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = vendorForm.querySelector('[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Submitting…';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = '✓ Application Received!';
        btn.style.background = '#25a865';
        vendorForm.reset();
        setTimeout(() => {
          btn.textContent = orig;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }

});
