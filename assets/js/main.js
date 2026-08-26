'use strict';
document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. PAGE LOADER ── */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 400);
    });
    // Fallback in case 'load' already fired
    if (document.readyState === 'complete') loader.classList.add('hidden');
  }

  /* ── 2. SCROLL PROGRESS BAR ── */
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      progressBar.style.width = pct + '%';
    }, { passive: true });
  }

  /* ── 3. STICKY HEADER ── */
  const header = document.querySelector('.site-header');
  if (header) {
    const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 60);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  /* ── 4. MOBILE MENU ── */
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuToggle.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    // Close on nav link click
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── 5. SCROLL ANIMATIONS ── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    const animEl = document.querySelectorAll('.fade-up,.fade-left,.fade-right,.img-reveal');
    if (animEl.length) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      animEl.forEach(el => obs.observe(el));
    }
  } else {
    document.querySelectorAll('.fade-up,.fade-left,.fade-right,.img-reveal').forEach(el => el.classList.add('visible'));
  }

  /* ── 6. COUNTER ANIMATION ── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = +el.getAttribute('data-count');
          const suffix = el.getAttribute('data-suffix') || '';
          let start = 0;
          const dur = 2000;
          const step = Math.ceil(target / (dur / 16));
          const interval = setInterval(() => {
            start = Math.min(start + step, target);
            el.textContent = start.toLocaleString('en-IN') + suffix;
            if (start >= target) clearInterval(interval);
          }, 16);
          countObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => countObs.observe(c));
  }

  /* ── 7. FAQ ACCORDION ── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const open = item.classList.toggle('open');
      answer.style.maxHeight = open ? answer.scrollHeight + 'px' : '0';
    });
  });

  /* ── 8. GALLERY FILTER ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        galleryItems.forEach(item => {
          const match = filter === 'all' || item.getAttribute('data-cat') === filter;
          item.style.display = match ? 'block' : 'none';
        });
      });
    });
  }

  /* ── 9. POPUPS ── */
  const closePopup = (overlay) => overlay && overlay.classList.remove('active');
  document.querySelectorAll('.popup-close').forEach(btn => {
    btn.addEventListener('click', () => closePopup(btn.closest('.popup-overlay')));
  });
  document.querySelectorAll('.popup-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closePopup(overlay); });
  });

  const initPopup = document.getElementById('initial-popup');
  if (initPopup && !sessionStorage.getItem('initialPopupDone')) {
    setTimeout(() => {
      initPopup.classList.add('active');
      sessionStorage.setItem('initialPopupDone', '1');
    }, 15000);
  }
  const exitPopup = document.getElementById('exit-popup');
  if (exitPopup && !sessionStorage.getItem('exitPopupDone')) {
    document.addEventListener('mouseleave', function handler(e) {
      if (e.clientY < 0) {
        exitPopup.classList.add('active');
        sessionStorage.setItem('exitPopupDone', '1');
        document.removeEventListener('mouseleave', handler);
      }
    });
  }

  /* ── 10. FORM VALIDATION + GOOGLE SHEETS ── */

  const validatePhone = v => /^[6-9]\d{9}$/.test(v.replace(/\s/g, ''));
  const validateEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxsP41QVtDUSnRa0EZLxkG9na6DzbMk3VDy8WUrShKJnPALMJQomCWTgEs1hySSJAzp/exec";

  document.querySelectorAll('form:not(#quote-form)').forEach(form => {

    form.addEventListener('submit', async (e) => {

      e.preventDefault();

      let valid = true;

      form.querySelectorAll('.form-control[required]').forEach(input => {

        if (!input.value.trim()) {
          input.classList.add('error');
          input.focus();
          valid = false;
          return;
        }

        if (input.type === 'tel' && !validatePhone(input.value)) {
          input.classList.add('error');
          input.focus();
          valid = false;
          return;
        }

        if (input.type === 'email' && !validateEmail(input.value)) {
          input.classList.add('error');
          input.focus();
          valid = false;
          return;
        }

        input.classList.remove('error');
      });

      if (!valid) return;

      const btn = form.querySelector('[type="submit"]');

      if (btn) {
        btn.textContent = 'Submitting...';
        btn.disabled = true;
      }

      const data = {
        name: document.getElementById('name')?.value.trim() || '',
        phone: document.getElementById('phone')?.value.trim() || '',
        location: document.getElementById('location')?.value.trim() || '',
        project: document.getElementById('project')?.value || '',
        budget: document.getElementById('budget')?.value || ''
      };

      try {

        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(data)
        });

        // Google Sheet request sent successfully
        form.innerHTML = `
        <div class="success-state"
             style="text-align:center;padding:40px 20px">

          <h3 style="font-family:var(--font-heading);
                     margin-bottom:8px">
            Thank You!
          </h3>

          <p style="color:var(--muted-text)">
            We've received your message.
            Our team will reach out within 24 hours.
          </p>

        </div>
      `;

      } catch (error) {

        console.error('Form submission error:', error);

        if (btn) {
          btn.textContent = 'Send Message';
          btn.disabled = false;
        }

        alert(
          'Unable to submit your request. Please try again.'
        );
      }

    });

  });
  /* ── 9. HERO SLIDER ── */
  const heroSliders = document.querySelectorAll('.hero-slider');
  heroSliders.forEach(slider => {
    const images = slider.querySelectorAll('img');
    if (images.length > 1) {
      let currentIdx = 0;
      setInterval(() => {
        images[currentIdx].classList.remove('active');
        currentIdx = (currentIdx + 1) % images.length;
        images[currentIdx].classList.add('active');
      }, 5000);
    }
  });

  /* ── 10. WHATSAPP FLOATING BUTTON ── */
  const waBtn = document.createElement('a');
  waBtn.href = "https://wa.me/919876543210";
  waBtn.className = "whatsapp-float";
  waBtn.target = "_blank";
  waBtn.rel = "noopener noreferrer";
  waBtn.setAttribute("aria-label", "Chat on WhatsApp");
  waBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>';
  document.body.appendChild(waBtn);
});
