const fs = require('fs');

const processContent = `
  <section class="section-padding">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <span class="section-label">Our Workflow</span>
        <h2 class="section-title">A Seamless Journey to Your Dream Home</h2>
        <p class="section-subtitle">We've refined our process to be as transparent, efficient, and stress-free as possible.</p>
      </div>
      
      <div style="max-width:800px;margin:0 auto;position:relative;">
        <div style="position:absolute;left:24px;top:0;bottom:0;width:2px;background:var(--border-color);z-index:0;"></div>
        
        <div class="fade-up delay-1" style="position:relative;z-index:1;display:flex;gap:32px;margin-bottom:48px;">
          <div style="width:48px;height:48px;border-radius:50%;background:var(--accent-color);color:var(--white-color);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-weight:700;font-size:1.2rem;flex-shrink:0;">1</div>
          <div style="background:var(--white-color);padding:32px;border-radius:12px;box-shadow:var(--shadow-soft);border:1px solid var(--border-color);width:100%;">
            <h3 style="margin-bottom:12px;">Initial Consultation</h3>
            <p style="margin:0;">We begin by understanding your vision, lifestyle, and budget. Our experts visit your site to take precise measurements and discuss material options.</p>
          </div>
        </div>
        
        <div class="fade-up delay-2" style="position:relative;z-index:1;display:flex;gap:32px;margin-bottom:48px;">
          <div style="width:48px;height:48px;border-radius:50%;background:var(--accent-color);color:var(--white-color);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-weight:700;font-size:1.2rem;flex-shrink:0;">2</div>
          <div style="background:var(--white-color);padding:32px;border-radius:12px;box-shadow:var(--shadow-soft);border:1px solid var(--border-color);width:100%;">
            <h3 style="margin-bottom:12px;">3D Design & Sign-off</h3>
            <p style="margin:0;">Our design team creates photorealistic 3D renders of your space. We refine the design until you are 100% satisfied before moving to production.</p>
          </div>
        </div>
        
        <div class="fade-up delay-3" style="position:relative;z-index:1;display:flex;gap:32px;margin-bottom:48px;">
          <div style="width:48px;height:48px;border-radius:50%;background:var(--accent-color);color:var(--white-color);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-weight:700;font-size:1.2rem;flex-shrink:0;">3</div>
          <div style="background:var(--white-color);padding:32px;border-radius:12px;box-shadow:var(--shadow-soft);border:1px solid var(--border-color);width:100%;">
            <h3 style="margin-bottom:12px;">Precision Manufacturing</h3>
            <p style="margin:0;">Approved designs are sent to our factory where German and Italian machinery cut, edge-band, and assemble your modular units with millimetre precision.</p>
          </div>
        </div>
        
        <div class="fade-up delay-4" style="position:relative;z-index:1;display:flex;gap:32px;">
          <div style="width:48px;height:48px;border-radius:50%;background:var(--accent-color);color:var(--white-color);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-weight:700;font-size:1.2rem;flex-shrink:0;">4</div>
          <div style="background:var(--white-color);padding:32px;border-radius:12px;box-shadow:var(--shadow-soft);border:1px solid var(--border-color);width:100%;">
            <h3 style="margin-bottom:12px;">Installation & Handover</h3>
            <p style="margin:0;">Our professional installation team fits the modules at your site efficiently, ensuring a clean finish. A final quality check is performed before the formal handover.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-padding bg-cream text-center">
    <div class="container fade-up">
      <a href="book-appointment.html" class="btn btn-primary btn-lg">Start Step 1 Today</a>
    </div>
  </section>
`;

const whyUsContent = `
  <section class="section-padding">
    <div class="container">
      <div class="grid-2" style="align-items:center;gap:60px;">
        <div class="fade-left">
          <h2>The smartest choice for your home interiors.</h2>
          <p>We've eliminated the unpredictability of home interiors by taking complete ownership of the process. No more chasing carpenters or dealing with delayed timelines.</p>
          <ul style="list-style:none;padding:0;margin-top:24px;display:grid;gap:16px;">
            <li style="display:flex;align-items:center;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span><strong>Factory Direct:</strong> We own the manufacturing, saving you the middleman markup.</span>
            </li>
            <li style="display:flex;align-items:center;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span><strong>5-Year Warranty:</strong> Complete peace of mind on manufacturing and hardware.</span>
            </li>
            <li style="display:flex;align-items:center;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span><strong>45-Day Delivery:</strong> We stick to our committed timelines, guaranteed.</span>
            </li>
            <li style="display:flex;align-items:center;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span><strong>Transparent Pricing:</strong> No hidden costs. You pay what was agreed upon.</span>
            </li>
          </ul>
        </div>
        <div class="fade-right">
          <img src="assets/images/thewoodverse/50.png" alt="Premium Woodverse Interiors" loading="lazy" style="width:100%;height:500px;object-fit:cover;border-radius:16px;box-shadow:var(--shadow-soft);">
        </div>
      </div>
    </div>
  </section>
`;

const faqContent = `
  <section class="section-padding">
    <div class="container">
      <div class="text-center fade-up" style="margin-bottom:60px;">
        <span class="section-label">FAQ</span>
        <h2 class="section-title">Frequently Asked Questions</h2>
      </div>
      <div style="max-width:800px;margin:0 auto;">
        <div class="faq-item fade-up">
          <button class="faq-question" aria-expanded="false">How is The Woodverse different from local carpenters?<svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="faq-answer"><p>Unlike carpenters who work manually at your site causing dust and delays, our furniture is machine-manufactured in our factory. This guarantees millimetre precision, flawless finishes, and installation in just a few days.</p></div>
        </div>
        <div class="faq-item fade-up delay-1">
          <button class="faq-question" aria-expanded="false">Do you charge for the initial 3D design?<svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="faq-answer"><p>We provide a basic 2D layout and quotation for free. Detailed 3D rendering begins once a token advance is paid, which is adjusted against your final project value.</p></div>
        </div>
        <div class="faq-item fade-up delay-2">
          <button class="faq-question" aria-expanded="false">What materials do you use?<svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="faq-answer"><p>We use premium ISI-certified Boiling Water Proof (BWP) and Boiling Water Resistant (BWR) plywood, alongside high-density HDF. Our hardware is sourced exclusively from trusted brands like Hettich and Hafele.</p></div>
        </div>
        <div class="faq-item fade-up delay-3">
          <button class="faq-question" aria-expanded="false">What is the standard delivery timeline?<svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="faq-answer"><p>Once the 3D designs are frozen and signed off, manufacturing and site installation take approximately 45 days.</p></div>
        </div>
      </div>
    </div>
  </section>
`;

const legalContent = (title) => `
  <section class="section-padding">
    <div class="container" style="max-width:800px;">
      <h2 style="margin-bottom:24px;">${title}</h2>
      <p>Last updated: August 2026</p>
      <div style="line-height:1.8;color:var(--dark-color);">
        <h3 style="margin-top:32px;margin-bottom:16px;">1. Introduction</h3>
        <p>Welcome to The Woodverse Interiors. This document governs your relationship with our website and our interior design services. By accessing or using our services, you agree to be bound by these terms.</p>
        
        <h3 style="margin-top:32px;margin-bottom:16px;">2. User Data and Privacy</h3>
        <p>We respect your privacy. Any personal information (such as name, phone number, and email address) submitted through our contact or quotation forms is used strictly for the purpose of communicating with you regarding your interior design requirements. We do not sell or share your data with third-party marketing agencies.</p>
        
        <h3 style="margin-top:32px;margin-bottom:16px;">3. Service Quotations</h3>
        <p>All quotes generated via the website are estimates based on the preliminary information provided. A final binding contract and quotation will only be issued after a physical site measurement and design finalization phase.</p>
        
        <h3 style="margin-top:32px;margin-bottom:16px;">4. Intellectual Property</h3>
        <p>All images, designs, and content on this website are the property of The Woodverse Interiors. Unauthorized use, reproduction, or distribution of this material is strictly prohibited.</p>
        
        <h3 style="margin-top:32px;margin-bottom:16px;">5. Contact Information</h3>
        <p>If you have any questions regarding these policies, please contact us at <strong>hello@thewoodverse.in</strong>.</p>
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

inject('process.html', processContent);
inject('why-us.html', whyUsContent);
inject('faq.html', faqContent);
inject('privacy-policy.html', legalContent('Privacy Policy'));
inject('terms.html', legalContent('Terms & Conditions'));
