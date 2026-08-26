const fs = require('fs');

const wardrobesContent = `
  <section class="page-hero" style="position:relative;padding:120px 0;background:#111;color:#fff;overflow:hidden;">
    <div class="hero-slider" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;">
      <img src="assets/images/thewoodverse/57.png" alt="Custom wardrobe interior" style="width:100%;height:100%;object-fit:cover;opacity:0.4;position:absolute;transition:opacity 1s ease;" class="hero-slide active">
      <img src="assets/images/thewoodverse/58.png" alt="Walk in wardrobe" style="width:100%;height:100%;object-fit:cover;opacity:0;position:absolute;transition:opacity 1s ease;" class="hero-slide">
      <img src="assets/images/thewoodverse/59.png" alt="Sliding wardrobe design" style="width:100%;height:100%;object-fit:cover;opacity:0;position:absolute;transition:opacity 1s ease;" class="hero-slide">
    </div>
    <div class="container" style="position:relative;z-index:1;">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html" style="color:var(--accent-color);">Home</a><span style="color:#fff;">/</span><span style="color:#fff;">Wardrobes</span></nav>
      <h1 style="color:#fff;font-size:3.5rem;margin-bottom:24px;">Bespoke Wardrobes</h1>
      <p style="font-size:1.2rem;max-width:600px;opacity:0.9;">Elevate your bedroom with custom-crafted wardrobes. Smart storage meets architectural elegance.</p>
    </div>
  </section>

  <section class="section-padding">
    <div class="container">
      <div class="grid-2" style="align-items:center;gap:60px;">
        <div class="fade-left">
          <span class="section-label">Introduction</span>
          <h2>Storage That Tells a Story</h2>
          <p>A wardrobe is more than just a place to store clothes; it's a reflection of your lifestyle and a key design element in your bedroom. At The Woodverse, we design custom wardrobes that maximize every inch of space without compromising on aesthetics.</p>
          <ul style="list-style:none;padding:0;margin-top:24px;display:grid;gap:16px;">
            <li style="display:flex;align-items:flex-start;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;margin-top:2px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span><strong>Floor-to-Ceiling:</strong> Complete space utilization with loft storage.</span>
            </li>
            <li style="display:flex;align-items:flex-start;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;margin-top:2px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span><strong>Premium Finishes:</strong> Acrylic, PU, Veneer, and Fluted Glass options.</span>
            </li>
          </ul>
        </div>
        <div class="fade-right">
          <img src="assets/images/thewoodverse/60.png" alt="Luxury Wardrobe Design" loading="lazy" style="width:100%;height:500px;object-fit:cover;border-radius:16px;">
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding bg-cream">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <span class="section-label">Our Range</span>
        <h2 class="section-title">Wardrobe Styles</h2>
      </div>
      <div class="kitchen-scroll" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:24px;">
        <div class="product-card fade-up">
          <img src="assets/images/thewoodverse/61.png" alt="Sliding Wardrobe" loading="lazy" width="600" height="800">
          <div class="product-card-overlay">
            <h3 class="product-card-title">Sliding Wardrobes</h3>
            <p class="product-card-desc">Space-saving glide doors perfect for compact bedrooms.</p>
          </div>
        </div>
        <div class="product-card fade-up delay-1">
          <img src="assets/images/thewoodverse/62.png" alt="Hinged Wardrobe" loading="lazy" width="600" height="800">
          <div class="product-card-overlay">
            <h3 class="product-card-title">Hinged Wardrobes</h3>
            <p class="product-card-desc">Classic swing doors for full visibility of your collection.</p>
          </div>
        </div>
        <div class="product-card fade-up delay-2">
          <img src="assets/images/thewoodverse/63.png" alt="Walk-in Wardrobe" loading="lazy" width="600" height="800">
          <div class="product-card-overlay">
            <h3 class="product-card-title">Walk-In Wardrobes</h3>
            <p class="product-card-desc">Your ultimate dressing room with island storage.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <h2 class="section-title">Internal Organization & Materials</h2>
        <p class="section-subtitle">It's what's on the inside that counts. We engineer the interiors of your wardrobe for maximum efficiency.</p>
      </div>
      <div class="grid-2" style="gap:40px;">
        <div class="fade-up delay-1" style="background:var(--cream-bg);padding:40px;border-radius:16px;">
          <h3>Smart Accessories</h3>
          <p>We use premium Hettich and Hafele hardware to integrate pull-down hangers, trouser racks, accessory drawers, and built-in sensor lighting.</p>
        </div>
        <div class="fade-up delay-2" style="background:var(--cream-bg);padding:40px;border-radius:16px;">
          <h3>Durable Materials</h3>
          <p>Built with HDHMR and BWP Plywood for core strength, finished with anti-scratch acrylics or rich real-wood veneers that stand the test of time.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding bg-dark text-center" style="color:var(--white-color);">
    <div class="container fade-up">
      <h2 style="color:var(--white-color);">Ready to design your wardrobe?</h2>
      <p style="color:rgba(255,255,255,0.7);max-width:600px;margin:16px auto 32px;">Book a free consultation with our space planning experts.</p>
      <a href="get-quote.html" class="btn btn-accent btn-lg">Get a Custom Quote</a>
    </div>
  </section>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      let slides = document.querySelectorAll('.hero-slide');
      if(slides.length > 0) {
        let current = 0;
        setInterval(() => {
          slides[current].classList.remove('active');
          slides[current].style.opacity = '0';
          current = (current + 1) % slides.length;
          slides[current].classList.add('active');
          slides[current].style.opacity = '0.4';
        }, 5000);
      }
    });
  </script>
`;

const kitchenContent = `
  <section class="page-hero" style="position:relative;padding:120px 0;background:#111;color:#fff;overflow:hidden;">
    <div class="hero-slider" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;">
      <img src="assets/images/thewoodverse/64.png" alt="Luxury Modular Kitchen" style="width:100%;height:100%;object-fit:cover;opacity:0.4;position:absolute;transition:opacity 1s ease;" class="hero-slide active">
      <img src="assets/images/thewoodverse/65.png" alt="Island Kitchen" style="width:100%;height:100%;object-fit:cover;opacity:0;position:absolute;transition:opacity 1s ease;" class="hero-slide">
      <img src="assets/images/thewoodverse/66.png" alt="Parallel Kitchen" style="width:100%;height:100%;object-fit:cover;opacity:0;position:absolute;transition:opacity 1s ease;" class="hero-slide">
    </div>
    <div class="container" style="position:relative;z-index:1;">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html" style="color:var(--accent-color);">Home</a><span style="color:#fff;">/</span><span style="color:#fff;">Modular Kitchens</span></nav>
      <h1 style="color:#fff;font-size:3.5rem;margin-bottom:24px;">Precision Modular Kitchens</h1>
      <p style="font-size:1.2rem;max-width:600px;opacity:0.9;">Ergonomically designed. Factory manufactured. Built for the modern Indian home.</p>
    </div>
  </section>

  <section class="section-padding">
    <div class="container">
      <div class="grid-2" style="align-items:center;gap:60px;">
        <div class="fade-left">
          <span class="section-label">Why The Woodverse</span>
          <h2>The Heart of Your Home, Engineered.</h2>
          <p>We don't just assemble boxes; we engineer highly functional culinary workspaces. A Woodverse kitchen is a perfect symphony of the working triangle—storage, washing, and cooking.</p>
          <ul style="list-style:none;padding:0;margin-top:24px;display:grid;gap:16px;">
            <li style="display:flex;align-items:flex-start;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;margin-top:2px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span><strong>BWP Plywood:</strong> Boiling Water Proof cores ensuring longevity even in wet areas.</span>
            </li>
            <li style="display:flex;align-items:flex-start;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;margin-top:2px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span><strong>German Hardware:</strong> Soft-close tandem boxes and robust hinges from Hettich.</span>
            </li>
          </ul>
        </div>
        <div class="fade-right">
          <img src="assets/images/thewoodverse/67.png" alt="Woodverse Kitchen Details" loading="lazy" style="width:100%;height:500px;object-fit:cover;border-radius:16px;">
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding bg-cream">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <h2 class="section-title">Kitchen Layouts</h2>
      </div>
      <div class="kitchen-scroll" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:24px;">
        <div class="product-card fade-up">
          <img src="assets/images/thewoodverse/11.png" alt="L-Shaped Kitchen" loading="lazy" width="600" height="800">
          <div class="product-card-overlay"><h3 class="product-card-title">L-Shaped</h3></div>
        </div>
        <div class="product-card fade-up delay-1">
          <img src="assets/images/thewoodverse/12.png" alt="U-Shaped Kitchen" loading="lazy" width="600" height="800">
          <div class="product-card-overlay"><h3 class="product-card-title">U-Shaped</h3></div>
        </div>
        <div class="product-card fade-up delay-2">
          <img src="assets/images/thewoodverse/13.png" alt="Parallel Kitchen" loading="lazy" width="600" height="800">
          <div class="product-card-overlay"><h3 class="product-card-title">Parallel</h3></div>
        </div>
        <div class="product-card fade-up delay-3">
          <img src="assets/images/thewoodverse/14.png" alt="Island Kitchen" loading="lazy" width="600" height="800">
          <div class="product-card-overlay"><h3 class="product-card-title">Island</h3></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding">
    <div class="container text-center fade-up">
      <h2>Experience our Craftsmanship</h2>
      <p style="color:var(--muted-text);max-width:600px;margin:16px auto 32px;">Every kitchen we deliver is a testament to our precision manufacturing process.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:16px;margin-bottom:40px;">
        <img src="assets/images/thewoodverse/15.png" alt="Kitchen Detail 1" style="width:100%;height:300px;object-fit:cover;border-radius:12px;">
        <img src="assets/images/thewoodverse/16.png" alt="Kitchen Detail 2" style="width:100%;height:300px;object-fit:cover;border-radius:12px;">
        <img src="assets/images/thewoodverse/17.png" alt="Kitchen Detail 3" style="width:100%;height:300px;object-fit:cover;border-radius:12px;">
      </div>
      <a href="portfolio.html" class="btn btn-outline btn-lg">View Full Portfolio</a>
    </div>
  </section>

  <section class="section-padding bg-dark text-center" style="color:var(--white-color);">
    <div class="container fade-up">
      <h2 style="color:var(--white-color);">Upgrade Your Cooking Experience</h2>
      <a href="get-quote.html" class="btn btn-accent btn-lg" style="margin-top:24px;">Request a Quote</a>
    </div>
  </section>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      let slides = document.querySelectorAll('.hero-slide');
      if(slides.length > 0) {
        let current = 0;
        setInterval(() => {
          slides[current].classList.remove('active');
          slides[current].style.opacity = '0';
          current = (current + 1) % slides.length;
          slides[current].classList.add('active');
          slides[current].style.opacity = '0.4';
        }, 5000);
      }
    });
  </script>
`;

function inject(file, content) {
  let html = fs.readFileSync(file, 'utf8');
  let mainStart = html.indexOf('<main>');
  let mainEnd = html.indexOf('</main>');
  if(mainStart !== -1 && mainEnd !== -1) {
    let top = html.substring(0, mainStart + 6);
    let bottom = html.substring(mainEnd);
    fs.writeFileSync(file, top + content + bottom);
    console.log(file + ' updated');
  } else {
    // If <main> doesn't exist, we fallback
    html = html.replace(/<div class="container" id="page-content">.*?<\/div>/s, content);
    fs.writeFileSync(file, html);
    console.log(file + ' updated via fallback');
  }
}

inject('wardrobes.html', wardrobesContent);
inject('modular-kitchen.html', kitchenContent);
