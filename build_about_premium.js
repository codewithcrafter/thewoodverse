const fs = require('fs');

const aboutContent = `
  <!-- 1. HERO SECTION -->
  <section class="page-hero" style="position:relative;padding:140px 0;background:#111;color:#fff;overflow:hidden;">
    <div style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;">
      <img src="assets/images/thewoodverse/18.png" alt="Woodverse Premium Interior Design" style="width:100%;height:100%;object-fit:cover;opacity:0.4;">
    </div>
    <div class="container" style="position:relative;z-index:1;text-align:center;">
      <h1 style="color:#fff;font-size:clamp(2.5rem, 5vw, 4rem);margin-bottom:24px;">About The Woodverse</h1>
      <p style="font-size:1.2rem;max-width:800px;margin:0 auto 32px;opacity:0.9;">Crafting Spaces That Feel Like Home.</p>
      <p style="font-size:1.1rem;max-width:800px;margin:0 auto 40px;opacity:0.8;">The Woodverse creates thoughtfully designed interiors, modular kitchens, wardrobes and custom furniture that seamlessly combine aesthetics, functionality, and master craftsmanship.</p>
      <a href="portfolio.html" class="btn btn-accent btn-lg">Explore Our Work</a>
    </div>
  </section>

  <!-- 2. INTRODUCTION / WHO WE ARE -->
  <section class="section-padding">
    <div class="container">
      <div class="grid-2" style="align-items:center;gap:80px;">
        <div class="fade-left">
          <div style="border-radius:16px;overflow:hidden;box-shadow:var(--shadow-soft);">
            <img src="assets/images/thewoodverse/27.png" alt="Thoughtful space planning and functional interior design" loading="lazy" style="width:100%;height:600px;object-fit:cover;">
          </div>
        </div>
        <div class="fade-right">
          <h2>Designed Around You</h2>
          <p style="margin-bottom:20px;">At The Woodverse, we believe that the best interiors are the ones that reflect the people who live in them. Our approach is deeply personal—starting with an intimate understanding of your lifestyle, daily habits, and aesthetic preferences.</p>
          <p style="margin-bottom:32px;">We combine thoughtful space planning with modern aesthetics to deliver highly functional, personalized solutions. From concept to completion, our focus remains on uncompromising quality and meticulous craftsmanship that turns your vision into reality.</p>
          <ul style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:1fr 1fr;gap:16px;">
            <li style="display:flex;align-items:center;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Personalized Design</span>
            </li>
            <li style="display:flex;align-items:center;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Functional Spaces</span>
            </li>
            <li style="display:flex;align-items:center;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Quality Craftsmanship</span>
            </li>
            <li style="display:flex;align-items:center;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Thoughtful Details</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. OUR DESIGN PHILOSOPHY -->
  <section class="section-padding bg-cream">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <h2 class="section-title">Our Design Philosophy</h2>
        <p class="section-subtitle">Good interior design is not only about appearance but also about how naturally a space works for the people using it.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:32px;">
        <div class="fade-up delay-1" style="background:var(--white-color);padding:40px;border-radius:16px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:16px;font-size:1.4rem;">Form Meets Function</h3>
          <p style="color:var(--muted-text);">Beautiful designs that remain incredibly practical and efficient in everyday life.</p>
        </div>
        <div class="fade-up delay-2" style="background:var(--white-color);padding:40px;border-radius:16px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:16px;font-size:1.4rem;">Designed for Your Lifestyle</h3>
          <p style="color:var(--muted-text);">Every space should perfectly reflect the unique personality of the people who live in it.</p>
        </div>
        <div class="fade-up delay-3" style="background:var(--white-color);padding:40px;border-radius:16px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:16px;font-size:1.4rem;">Details Matter</h3>
          <p style="color:var(--muted-text);">Materials, finishes, hardware, and small details create the final refined character.</p>
        </div>
        <div class="fade-up delay-4" style="background:var(--white-color);padding:40px;border-radius:16px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:16px;font-size:1.4rem;">Timeless by Design</h3>
          <p style="color:var(--muted-text);">We create elegant interiors that remain stunning and relevant far beyond changing trends.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. WHAT WE CREATE -->
  <section class="section-padding">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <h2 class="section-title">What We Create</h2>
      </div>
      <div class="services-grid">
        <article class="card fade-up delay-1">
          <div class="card-img"><img src="assets/images/thewoodverse/33.png" alt="Modular Kitchen Design" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Modular Kitchens</h3>
            <p class="card-desc">Engineered for culinary perfection with smart storage and premium finishes.</p>
            <a href="modular-kitchen.html" class="card-link">Explore Kitchens</a>
          </div>
        </article>
        <article class="card fade-up delay-2">
          <div class="card-img"><img src="assets/images/thewoodverse/36.png" alt="Custom Wardrobe Interior" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Custom Wardrobes</h3>
            <p class="card-desc">Tailored sliding and walk-in wardrobes maximizing space and style.</p>
            <a href="wardrobes.html" class="card-link">Explore Wardrobes</a>
          </div>
        </article>
        <article class="card fade-up delay-3">
          <div class="card-img"><img src="assets/images/thewoodverse/40.png" alt="Bedroom Interior Decor" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Bedroom Interiors</h3>
            <p class="card-desc">Serene sanctuaries featuring custom bed frames and ambient lighting.</p>
            <a href="bedroom.html" class="card-link">Explore Bedrooms</a>
          </div>
        </article>
        <article class="card fade-up delay-1">
          <div class="card-img"><img src="assets/images/thewoodverse/45.png" alt="Living Room Interiors" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Living Room Interiors</h3>
            <p class="card-desc">Elegant entertaining spaces with bespoke TV walls and display units.</p>
            <a href="living-room.html" class="card-link">Explore Living Rooms</a>
          </div>
        </article>
        <article class="card fade-up delay-2">
          <div class="card-img"><img src="assets/images/thewoodverse/48.png" alt="Custom Furniture Design" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Custom Furniture</h3>
            <p class="card-desc">Precision-manufactured standalone pieces built uniquely for your home.</p>
            <a href="contact.html" class="card-link">Enquire Now</a>
          </div>
        </article>
        <article class="card fade-up delay-3">
          <div class="card-img"><img src="assets/images/thewoodverse/31.png" alt="Complete Home Interiors" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Complete Home Interiors</h3>
            <p class="card-desc">Turnkey solutions transforming your entire house into a cohesive home.</p>
            <a href="home-interiors.html" class="card-link">View Full Interiors</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 5. OUR APPROACH -->
  <section class="section-padding bg-cream">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <h2 class="section-title">From Idea to Installation</h2>
      </div>
      <div style="max-width:900px;margin:0 auto;">
        <div style="display:grid;gap:24px;">
          <div class="fade-up delay-1" style="background:var(--white-color);padding:32px;border-radius:12px;display:flex;align-items:center;gap:24px;box-shadow:var(--shadow-soft);">
            <div style="font-size:2rem;font-family:var(--font-heading);font-weight:700;color:var(--accent-color);opacity:0.5;">01</div>
            <div>
              <h3 style="margin-bottom:8px;">Understand</h3>
              <p style="margin:0;color:var(--muted-text);">We understand your lifestyle, needs, preferences, and space.</p>
            </div>
          </div>
          <div class="fade-up delay-2" style="background:var(--white-color);padding:32px;border-radius:12px;display:flex;align-items:center;gap:24px;box-shadow:var(--shadow-soft);">
            <div style="font-size:2rem;font-family:var(--font-heading);font-weight:700;color:var(--accent-color);opacity:0.5;">02</div>
            <div>
              <h3 style="margin-bottom:8px;">Plan</h3>
              <p style="margin:0;color:var(--muted-text);">We develop thoughtful layouts and highly functional design solutions.</p>
            </div>
          </div>
          <div class="fade-up delay-3" style="background:var(--white-color);padding:32px;border-radius:12px;display:flex;align-items:center;gap:24px;box-shadow:var(--shadow-soft);">
            <div style="font-size:2rem;font-family:var(--font-heading);font-weight:700;color:var(--accent-color);opacity:0.5;">03</div>
            <div>
              <h3 style="margin-bottom:8px;">Design</h3>
              <p style="margin:0;color:var(--muted-text);">We bring the concept together through materials, finishes, and visual details.</p>
            </div>
          </div>
          <div class="fade-up delay-4" style="background:var(--white-color);padding:32px;border-radius:12px;display:flex;align-items:center;gap:24px;box-shadow:var(--shadow-soft);">
            <div style="font-size:2rem;font-family:var(--font-heading);font-weight:700;color:var(--accent-color);opacity:0.5;">04</div>
            <div>
              <h3 style="margin-bottom:8px;">Craft</h3>
              <p style="margin:0;color:var(--muted-text);">The design is translated into carefully crafted furniture and precise interiors.</p>
            </div>
          </div>
          <div class="fade-up delay-5" style="background:var(--white-color);padding:32px;border-radius:12px;display:flex;align-items:center;gap:24px;box-shadow:var(--shadow-soft);">
            <div style="font-size:2rem;font-family:var(--font-heading);font-weight:700;color:var(--accent-color);opacity:0.5;">05</div>
            <div>
              <h3 style="margin-bottom:8px;">Complete</h3>
              <p style="margin:0;color:var(--muted-text);">The final space is installed, refined, and prepared for everyday living.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. QUALITY & CRAFTSMANSHIP -->
  <section class="section-padding">
    <div class="container">
      <div class="grid-2" style="align-items:center;gap:60px;">
        <div class="fade-left">
          <img src="assets/images/thewoodverse/38.png" alt="Close-up of premium interior finishes and craftsmanship" loading="lazy" style="width:100%;height:600px;object-fit:cover;border-radius:16px;box-shadow:var(--shadow-soft);">
        </div>
        <div class="fade-right">
          <h2>Where Craftsmanship Meets Design</h2>
          <p style="margin-bottom:20px;">A beautiful design is only as good as its execution. We place immense importance on quality materials, precise measurements, and durable hardware to ensure your space stands the test of time.</p>
          <p>Careful finishing and rigorous attention to detail are what separate average interiors from true luxury. By managing our own manufacturing, we guarantee long-lasting functionality and a flawless aesthetic finish.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. WHY THE WOODVERSE -->
  <section class="section-padding bg-cream">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <h2 class="section-title">Why Choose The Woodverse?</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:32px;">
        <div class="fade-up delay-1" style="background:var(--white-color);padding:32px;border-radius:12px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:12px;font-size:1.3rem;">Personalized Solutions</h3>
          <p style="margin:0;color:var(--muted-text);">Every project is designed uniquely around the client's specific requirements.</p>
        </div>
        <div class="fade-up delay-2" style="background:var(--white-color);padding:32px;border-radius:12px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:12px;font-size:1.3rem;">Functional Design</h3>
          <p style="margin:0;color:var(--muted-text);">Spaces are purposefully designed to look beautiful and work effortlessly.</p>
        </div>
        <div class="fade-up delay-3" style="background:var(--white-color);padding:32px;border-radius:12px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:12px;font-size:1.3rem;">Thoughtful Materials</h3>
          <p style="margin:0;color:var(--muted-text);">Finishes and materials are selected with both aesthetic appeal and durability in mind.</p>
        </div>
        <div class="fade-up delay-4" style="background:var(--white-color);padding:32px;border-radius:12px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:12px;font-size:1.3rem;">Attention to Detail</h3>
          <p style="margin:0;color:var(--muted-text);">Small, meticulously crafted details come together to create a refined final space.</p>
        </div>
        <div class="fade-up delay-5" style="background:var(--white-color);padding:32px;border-radius:12px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:12px;font-size:1.3rem;">Complete Solutions</h3>
          <p style="margin:0;color:var(--muted-text);">From modular kitchens and custom wardrobes to complete home interiors.</p>
        </div>
        <div class="fade-up delay-6" style="background:var(--white-color);padding:32px;border-radius:12px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:12px;font-size:1.3rem;">Client-Centric Approach</h3>
          <p style="margin:0;color:var(--muted-text);">The entire design process stays strictly focused on your vision and requirements.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. VISUAL SHOWCASE -->
  <section class="section-padding">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <h2 class="section-title">A Glimpse Into Our Work</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:16px;">
        <div class="gallery-item fade-up delay-1"><img src="assets/images/thewoodverse/28.png" alt="Modern interior styling" class="lightbox-trigger" loading="lazy" style="width:100%;height:300px;object-fit:cover;cursor:pointer;"></div>
        <div class="gallery-item fade-up delay-2"><img src="assets/images/thewoodverse/29.png" alt="Luxurious residential interior" class="lightbox-trigger" loading="lazy" style="width:100%;height:300px;object-fit:cover;cursor:pointer;"></div>
        <div class="gallery-item fade-up delay-3"><img src="assets/images/thewoodverse/32.png" alt="Contemporary home layout" class="lightbox-trigger" loading="lazy" style="width:100%;height:300px;object-fit:cover;cursor:pointer;"></div>
        <div class="gallery-item fade-up delay-1"><img src="assets/images/thewoodverse/34.png" alt="Bespoke furniture setup" class="lightbox-trigger" loading="lazy" style="width:100%;height:300px;object-fit:cover;cursor:pointer;"></div>
        <div class="gallery-item fade-up delay-2"><img src="assets/images/thewoodverse/35.png" alt="Premium kitchen finishes" class="lightbox-trigger" loading="lazy" style="width:100%;height:300px;object-fit:cover;cursor:pointer;"></div>
        <div class="gallery-item fade-up delay-3"><img src="assets/images/thewoodverse/39.png" alt="Elegant storage solution" class="lightbox-trigger" loading="lazy" style="width:100%;height:300px;object-fit:cover;cursor:pointer;"></div>
      </div>
    </div>
  </section>

  <!-- 9. BRAND STATEMENT -->
  <section class="section-padding bg-dark text-center" style="color:var(--white-color);">
    <div class="container fade-up">
      <h2 style="color:var(--white-color);font-size:clamp(2rem, 4vw, 3rem);margin-bottom:24px;">Spaces Designed to Live Beautifully</h2>
      <p style="color:rgba(255,255,255,0.8);max-width:800px;margin:0 auto 40px;font-size:1.1rem;line-height:1.6;">The Woodverse brings together thoughtful design, functional planning and refined craftsmanship to create interiors that feel personal, practical and timeless.</p>
      <a href="portfolio.html" class="btn btn-accent btn-lg">View Our Projects</a>
    </div>
  </section>

  <!-- 10. FAQ SECTION -->
  <section class="section-padding bg-cream">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <h2 class="section-title">Common Questions</h2>
      </div>
      <div style="max-width:800px;margin:0 auto;">
        <div class="faq-item fade-up">
          <button class="faq-question" aria-expanded="false">Do you provide customized interior solutions?<svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="faq-answer"><p>Yes, every project we undertake is 100% customized. We tailor the layout, materials, and features specifically to your lifestyle and the exact dimensions of your space.</p></div>
        </div>
        <div class="faq-item fade-up delay-1">
          <button class="faq-question" aria-expanded="false">Can you design interiors for specific room sizes?<svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="faq-answer"><p>Absolutely. Whether you have a compact studio apartment or a sprawling villa, our design team excels at maximizing utility and aesthetics regardless of square footage.</p></div>
        </div>
        <div class="faq-item fade-up delay-2">
          <button class="faq-question" aria-expanded="false">Do you provide modular kitchen and wardrobe solutions?<svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="faq-answer"><p>Yes, modular kitchens and wardrobes are our specialties. We manufacture these in-house using precision European machinery to ensure flawless finishing.</p></div>
        </div>
        <div class="faq-item fade-up delay-3">
          <button class="faq-question" aria-expanded="false">Can I choose materials and finishes?<svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="faq-answer"><p>Of course. During the design phase, we present a wide array of premium materials, laminates, acrylics, veneers, and hardware for you to choose from.</p></div>
        </div>
        <div class="faq-item fade-up delay-4">
          <button class="faq-question" aria-expanded="false">Do you work on complete home interiors?<svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="faq-answer"><p>Yes, we offer comprehensive turnkey solutions, managing everything from civil modifications and false ceilings to furniture manufacturing and final styling.</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 11. FINAL CTA -->
  <section class="section-padding">
    <div class="container text-center fade-up">
      <h2 style="font-size:clamp(2rem, 4vw, 3rem);margin-bottom:24px;">Ready to Create a Space That Feels Like You?</h2>
      <p style="color:var(--muted-text);max-width:600px;margin:0 auto 40px;font-size:1.1rem;line-height:1.6;">Tell us about your space, your ideas and what you want to create. Let's turn them into a thoughtfully designed interior.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
        <a href="get-quote.html" class="btn btn-primary btn-lg">Start Your Project</a>
        <a href="portfolio.html" class="btn btn-outline btn-lg">View Portfolio</a>
      </div>
    </div>
  </section>

  <!-- Lightbox for Gallery -->
  <div id="about-lightbox-modal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;align-items:center;justify-content:center;padding:20px;">
    <span id="about-lightbox-close" style="position:absolute;top:20px;right:40px;color:#fff;font-size:40px;cursor:pointer;">&times;</span>
    <img id="about-lightbox-img" src="" style="max-width:90vw;max-height:90vh;border-radius:8px;box-shadow:0 0 20px rgba(0,0,0,0.5);">
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('about-lightbox-modal');
      const modalImg = document.getElementById('about-lightbox-img');
      const closeBtn = document.getElementById('about-lightbox-close');
      const items = document.querySelectorAll('.lightbox-trigger');

      if(items.length > 0 && modal && modalImg && closeBtn) {
        items.forEach(img => {
          img.addEventListener('click', (e) => {
            modal.style.display = 'flex';
            modalImg.src = e.target.src;
          });
        });

        closeBtn.addEventListener('click', () => {
          modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
          if(e.target === modal) {
            modal.style.display = 'none';
          }
        });
      }
    });
  </script>
`;

let html = fs.readFileSync('about.html', 'utf8');

// The original about.html was generated by my build script, which means it has a 
// <main> block, or a <div class="container" id="page-content">...</div> block.
// Wait, my build script for about.html injected `<section class="page-hero">` and `<section class="section-padding">`.
// But the wrapper is `<main>`. So I can just replace everything inside `<main>...</main>` with `aboutContent`.

const mainStart = html.indexOf('<main>');
const mainEnd = html.indexOf('</main>');

if (mainStart !== -1 && mainEnd !== -1) {
  let newHtml = html.substring(0, mainStart + 6) + '\\n' + aboutContent + '\\n' + html.substring(mainEnd);
  fs.writeFileSync('about.html', newHtml);
  console.log('about.html completely redesigned');
} else {
  console.log('Could not find <main> tag in about.html');
}
