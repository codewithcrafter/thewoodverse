const fs = require('fs');

const servicesContent = `
  <section class="section-padding">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <span class="section-label">What We Do</span>
        <h2 class="section-title">Comprehensive Interior Solutions</h2>
        <p class="section-subtitle">We offer a full spectrum of interior design and manufacturing services, from single rooms to complete home transformations.</p>
      </div>
      <div class="services-grid">
        <article class="card fade-up delay-1">
          <div class="card-img"><img src="assets/images/thewoodverse/40.png" alt="Premium Modular Kitchens" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Modular Kitchens</h3>
            <p class="card-desc">State-of-the-art modular kitchens tailored to your cooking style. Ergonomic layouts, smart storage, and premium finishes.</p>
            <a href="modular-kitchen.html" class="card-link">Explore Kitchens</a>
          </div>
        </article>
        <article class="card fade-up delay-2">
          <div class="card-img"><img src="assets/images/thewoodverse/41.png" alt="Custom Wardrobes" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Wardrobes</h3>
            <p class="card-desc">Sliding, hinged, and walk-in wardrobes designed to maximize storage while seamlessly blending with your bedroom decor.</p>
            <a href="wardrobes.html" class="card-link">Explore Wardrobes</a>
          </div>
        </article>
        <article class="card fade-up delay-3">
          <div class="card-img"><img src="assets/images/thewoodverse/42.png" alt="Complete Home Interiors" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Complete Home Interiors</h3>
            <p class="card-desc">End-to-end turnkey interior solutions. We handle everything from civil work and false ceilings to furniture and styling.</p>
            <a href="home-interiors.html" class="card-link">View Full Interiors</a>
          </div>
        </article>
        <article class="card fade-up delay-1">
          <div class="card-img"><img src="assets/images/thewoodverse/43.png" alt="Living Room Interiors" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Living Room Interiors</h3>
            <p class="card-desc">Bespoke TV units, display cabinets, and complete living space design for the perfect entertainment and relaxation zone.</p>
            <a href="living-room.html" class="card-link">Explore Living Rooms</a>
          </div>
        </article>
        <article class="card fade-up delay-2">
          <div class="card-img"><img src="assets/images/thewoodverse/44.png" alt="Bedroom Interiors" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Bedroom Interiors</h3>
            <p class="card-desc">Personalized bedroom sanctuaries featuring custom bed back panels, side tables, and integrated ambient lighting.</p>
            <a href="bedroom.html" class="card-link">Explore Bedrooms</a>
          </div>
        </article>
        <article class="card fade-up delay-3">
          <div class="card-img"><img src="assets/images/thewoodverse/45.png" alt="Custom TV Units" loading="lazy" width="700" height="525"></div>
          <div class="card-body">
            <h3 class="card-title">Custom TV Units</h3>
            <p class="card-desc">Minimalist and grand TV consoles designed to hide wires and showcase your media center beautifully.</p>
            <a href="tv-units.html" class="card-link">Explore TV Units</a>
          </div>
        </article>
      </div>
    </div>
  </section>
  <section class="section-padding bg-cream text-center">
    <div class="container fade-up">
      <h2>Don't see what you're looking for?</h2>
      <p style="color:var(--muted-text);max-width:600px;margin:16px auto 32px;">We create custom furniture and bespoke solutions tailored to your unique requirements.</p>
      <a href="get-quote.html" class="btn btn-primary btn-lg">Discuss Your Project</a>
    </div>
  </section>
`;

const contactContent = `
  <section class="section-padding">
    <div class="container">
      <div class="grid-2" style="gap:60px;">
        <div class="fade-left">
          <h2>Get In Touch</h2>
          <p style="margin-bottom:32px;">Whether you're ready to start your project or just have a few questions, our team is here to help.</p>
          
          <div style="display:flex;gap:16px;margin-bottom:24px;">
            <div style="color:var(--accent-color);"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>
            <div>
              <h4 style="margin:0 0 4px;">Our Studio</h4>
              <p style="color:var(--muted-text);margin:0;">123 Design District, New Delhi 110001<br>Delhi NCR, India</p>
            </div>
          </div>
          
          <div style="display:flex;gap:16px;margin-bottom:24px;">
            <div style="color:var(--accent-color);"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg></div>
            <div>
              <h4 style="margin:0 0 4px;">Call Us</h4>
              <p style="color:var(--muted-text);margin:0;"><a href="tel:+919876543210" style="color:inherit;text-decoration:none;">+91 98765 43210</a></p>
            </div>
          </div>
          
          <div style="display:flex;gap:16px;margin-bottom:48px;">
            <div style="color:var(--accent-color);"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div>
            <div>
              <h4 style="margin:0 0 4px;">Email Us</h4>
              <p style="color:var(--muted-text);margin:0;"><a href="mailto:hello@thewoodverse.in" style="color:inherit;text-decoration:none;">hello@thewoodverse.in</a></p>
            </div>
          </div>
          
          <h3>Working Hours</h3>
          <p style="color:var(--muted-text);">Monday - Saturday: 9:00 AM - 7:00 PM<br>Sunday: By Appointment Only</p>
        </div>
        
        <div class="fade-right" style="background:var(--cream-bg);padding:40px;border-radius:16px;">
          <h3 style="margin-bottom:24px;">Send us a Message</h3>
          <form id="contact-form" style="display:grid;gap:20px;">
            <div>
              <label for="name" style="display:block;margin-bottom:8px;font-weight:500;">Your Name</label>
              <input type="text" id="name" class="form-control" style="width:100%;padding:12px;border:1px solid var(--border-color);border-radius:8px;" required>
            </div>
            <div>
              <label for="phone" style="display:block;margin-bottom:8px;font-weight:500;">Phone Number</label>
              <input type="tel" id="phone" class="form-control" style="width:100%;padding:12px;border:1px solid var(--border-color);border-radius:8px;" required>
            </div>
            <div>
              <label for="email" style="display:block;margin-bottom:8px;font-weight:500;">Email Address</label>
              <input type="email" id="email" class="form-control" style="width:100%;padding:12px;border:1px solid var(--border-color);border-radius:8px;" required>
            </div>
            <div>
              <label for="message" style="display:block;margin-bottom:8px;font-weight:500;">How can we help?</label>
              <textarea id="message" class="form-control" rows="4" style="width:100%;padding:12px;border:1px solid var(--border-color);border-radius:8px;" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;padding:16px;font-size:1.1rem;">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
`;

const quoteContent = `
  <section class="section-padding">
    <div class="container">
      <div class="text-center fade-up" style="max-width:700px;margin:0 auto 60px;">
        <h2>Tell us about your project</h2>
        <p style="color:var(--muted-text);">Provide some basic details about what you're looking for, and our design team will get back to you with a personalized estimate within 24 hours.</p>
      </div>
      
      <div class="fade-up" style="max-width:800px;margin:0 auto;background:var(--white-color);padding:40px;border-radius:16px;box-shadow:var(--shadow-soft);border:1px solid var(--border-color);">
        <form id="quote-form" style="display:grid;gap:24px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            <div>
              <label style="display:block;margin-bottom:8px;font-weight:500;">Full Name *</label>
              <input type="text" class="form-control" style="width:100%;padding:12px;border:1px solid var(--border-color);border-radius:8px;" required>
            </div>
            <div>
              <label style="display:block;margin-bottom:8px;font-weight:500;">Phone Number *</label>
              <input type="tel" class="form-control" style="width:100%;padding:12px;border:1px solid var(--border-color);border-radius:8px;" required>
            </div>
          </div>
          
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            <div>
              <label style="display:block;margin-bottom:8px;font-weight:500;">Email Address *</label>
              <input type="email" class="form-control" style="width:100%;padding:12px;border:1px solid var(--border-color);border-radius:8px;" required>
            </div>
            <div>
              <label style="display:block;margin-bottom:8px;font-weight:500;">Property Location *</label>
              <input type="text" class="form-control" placeholder="e.g., Gurgaon, Noida" style="width:100%;padding:12px;border:1px solid var(--border-color);border-radius:8px;" required>
            </div>
          </div>
          
          <div>
            <label style="display:block;margin-bottom:12px;font-weight:500;">What services are you looking for? (Select all that apply)</label>
            <div style="display:flex;gap:16px;flex-wrap:wrap;">
              <label style="display:flex;align-items:center;gap:8px;"><input type="checkbox"> Modular Kitchen</label>
              <label style="display:flex;align-items:center;gap:8px;"><input type="checkbox"> Wardrobes</label>
              <label style="display:flex;align-items:center;gap:8px;"><input type="checkbox"> Living Room</label>
              <label style="display:flex;align-items:center;gap:8px;"><input type="checkbox"> Full Home Interiors</label>
              <label style="display:flex;align-items:center;gap:8px;"><input type="checkbox"> Custom Furniture</label>
            </div>
          </div>
          
          <div>
            <label style="display:block;margin-bottom:12px;font-weight:500;">Property Type</label>
            <select class="form-control" style="width:100%;padding:12px;border:1px solid var(--border-color);border-radius:8px;">
              <option>Apartment (1-2 BHK)</option>
              <option>Apartment (3-4 BHK)</option>
              <option>Villa / Independent House</option>
              <option>Builder Floor</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label style="display:block;margin-bottom:8px;font-weight:500;">Additional Details</label>
            <textarea class="form-control" rows="4" placeholder="Tell us more about your style preferences, timeline, etc." style="width:100%;padding:12px;border:1px solid var(--border-color);border-radius:8px;"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary" style="padding:16px;font-size:1.1rem;width:100%;margin-top:8px;">Request My Quote</button>
        </form>
      </div>
    </div>
  </section>
`;

function inject(file, content) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<div class="container" id="page-content">.*?<\/div>/s, content);
  fs.writeFileSync(file, html);
  console.log(file + ' updated');
}

inject('services.html', servicesContent);
inject('contact.html', contactContent);
inject('get-quote.html', quoteContent);
inject('book-appointment.html', quoteContent); // Reuse quote form for appointment
