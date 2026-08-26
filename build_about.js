const fs = require('fs');

const aboutContent = `
  <section class="section-padding">
    <div class="container">
      <div class="grid-2" style="align-items:center;gap:80px;">
        <div class="fade-left">
          <div class="img-reveal" style="border-radius:16px;overflow:hidden;">
            <img src="assets/images/thewoodverse/3.png" alt="Woodverse Interior Design Philosophy" loading="lazy" width="900" height="600" style="width:100%;height:600px;object-fit:cover;">
          </div>
        </div>
        <div class="fade-right">
          <span class="section-label">Our Story</span>
          <h2>Crafting Spaces That Tell Your Story</h2>
          <p>Founded on the belief that everyone deserves a beautiful, functional home, The Woodverse Interiors has grown into Delhi NCR's premier end-to-end interior design and manufacturing studio.</p>
          <p>We started with a simple mission: to eliminate the unreliability and hidden costs associated with traditional carpentry. By bringing design, manufacturing, and installation under one roof, we've created a seamless, transparent experience for homeowners.</p>
          <p>Today, our state-of-the-art manufacturing facility produces precision-engineered modular furniture that rivals the best European brands, all tailored specifically for Indian homes.</p>
          <div style="display:flex;gap:40px;margin-top:32px;padding-top:32px;border-top:1px solid var(--border-color);">
            <div><span style="font-family:var(--font-heading);font-size:2.5rem;font-weight:700;color:var(--dark-color);">12<span style="color:var(--accent-color);">+</span></span><p style="margin:4px 0 0;font-size:0.8rem;letter-spacing:1px;text-transform:uppercase;">Years</p></div>
            <div><span style="font-family:var(--font-heading);font-size:2.5rem;font-weight:700;color:var(--dark-color);">500<span style="color:var(--accent-color);">+</span></span><p style="margin:4px 0 0;font-size:0.8rem;letter-spacing:1px;text-transform:uppercase;">Homes</p></div>
            <div><span style="font-family:var(--font-heading);font-size:2.5rem;font-weight:700;color:var(--dark-color);">100<span style="color:var(--accent-color);">%</span></span><p style="margin:4px 0 0;font-size:0.8rem;letter-spacing:1px;text-transform:uppercase;">In-House</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding bg-cream">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <span class="section-label">Philosophy</span>
        <h2 class="section-title">The Woodverse Difference</h2>
        <p class="section-subtitle">We don't just build furniture; we engineer lifestyle solutions.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:32px;">
        <div class="fade-up delay-1" style="background:var(--white-color);padding:40px;border-radius:16px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:16px;">Design Excellence</h3>
          <p>Our award-winning designers work closely with you to understand your habits, tastes, and storage needs, creating spaces that are as functional as they are stunning.</p>
        </div>
        <div class="fade-up delay-2" style="background:var(--white-color);padding:40px;border-radius:16px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:16px;">Precision Manufacturing</h3>
          <p>Our European machinery ensures millimetre-perfect cutting and edge-banding, resulting in seamless finishes that are impossible to achieve via manual carpentry.</p>
        </div>
        <div class="fade-up delay-3" style="background:var(--white-color);padding:40px;border-radius:16px;box-shadow:var(--shadow-soft);">
          <h3 style="margin-bottom:16px;">Premium Materials</h3>
          <p>We source only the highest grade BWR/BWP plywood, HDF, and imported hardware (Hettich, Hafele) to ensure your interiors last for generations.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding">
    <div class="container text-center fade-up">
      <h2>Ready to start your journey?</h2>
      <p style="color:var(--muted-text);max-width:600px;margin:16px auto 32px;">Our designers are ready to bring your vision to life.</p>
      <a href="contact.html" class="btn btn-primary btn-lg">Contact Us Today</a>
    </div>
  </section>
`;

let html = fs.readFileSync('about.html', 'utf8');
html = html.replace(/<div class="container" id="page-content">.*?<\/div>/s, aboutContent);
fs.writeFileSync('about.html', html);
console.log('about.html updated');
