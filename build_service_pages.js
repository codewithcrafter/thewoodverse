const fs = require('fs');

const createServiceContent = (title, desc, img, feature1, feature2, feature3) => `
  <section class="section-padding">
    <div class="container">
      <div class="grid-2" style="align-items:center;gap:60px;">
        <div class="fade-left">
          <span class="section-label">${title}</span>
          <h2>Design tailored to your life.</h2>
          <p>${desc}</p>
          <ul style="list-style:none;padding:0;margin-top:24px;display:grid;gap:16px;">
            <li style="display:flex;align-items:flex-start;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;margin-top:2px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span><strong>${feature1.split(':')[0]}:</strong> ${feature1.split(':')[1] || feature1}</span>
            </li>
            <li style="display:flex;align-items:flex-start;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;margin-top:2px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span><strong>${feature2.split(':')[0]}:</strong> ${feature2.split(':')[1] || feature2}</span>
            </li>
            <li style="display:flex;align-items:flex-start;gap:12px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-color)" style="flex-shrink:0;margin-top:2px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span><strong>${feature3.split(':')[0]}:</strong> ${feature3.split(':')[1] || feature3}</span>
            </li>
          </ul>
          <div style="margin-top:40px;">
            <a href="get-quote.html" class="btn btn-primary">Request a Quote</a>
          </div>
        </div>
        <div class="fade-right">
          <img src="assets/images/thewoodverse/${img}.png" alt="${title} Design" loading="lazy" style="width:100%;height:600px;object-fit:cover;border-radius:16px;box-shadow:var(--shadow-soft);">
        </div>
      </div>
    </div>
  </section>
  <section class="section-padding bg-cream text-center">
    <div class="container fade-up">
      <h2>Transform your space today.</h2>
      <p style="color:var(--muted-text);max-width:600px;margin:16px auto 32px;">Schedule a free consultation with our award-winning design team.</p>
      <a href="book-appointment.html" class="btn btn-accent btn-lg">Book Free Consultation</a>
    </div>
  </section>
`;

function inject(file, content) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<div class="container" id="page-content">.*?<\/div>/s, content);
  fs.writeFileSync(file, html);
  console.log(file + ' updated');
}

inject('home-interiors.html', createServiceContent(
  'Complete Home Interiors', 
  'From bare walls to a beautifully furnished home. Our turnkey interior design solutions cover everything from civil work and false ceilings to custom furniture and styling. We manage the entire project so you don\'t have to.', 
  '46', 
  'Turnkey Execution: Complete project management from start to finish.', 
  'Personalized Design: Spaces designed specifically around your family\'s lifestyle.', 
  'Quality Assurance: In-house manufacturing guarantees superior finish and longevity.'
));

inject('living-room.html', createServiceContent(
  'Living Room Interiors', 
  'The living room is the heart of your home. We design elegant, comfortable living spaces that are perfect for both entertaining guests and relaxing with family. Every piece of furniture is custom-crafted to match your aesthetic.', 
  '47', 
  'Custom Furniture: Sofas, coffee tables, and display units built to order.', 
  'Space Planning: Optimised layouts that make your room feel larger and more inviting.', 
  'Ambient Lighting: Integrated lighting solutions that set the perfect mood.'
));

inject('bedroom.html', createServiceContent(
  'Bedroom Interiors', 
  'Your bedroom should be a personal sanctuary. We design serene, clutter-free bedrooms featuring custom bed frames, elegant back panels, smart wardrobes, and soothing lighting to ensure you wake up refreshed every day.', 
  '48', 
  'Bespoke Beds: Custom headboards and frames tailored to your comfort.', 
  'Smart Storage: Seamlessly integrated wardrobes and hidden storage solutions.', 
  'Aesthetic Harmony: Coordinated colours, textures, and finishes for a calming environment.'
));

inject('tv-units.html', createServiceContent(
  'Custom TV Units', 
  'Elevate your entertainment experience. Our custom TV units are designed to beautifully frame your screen while smartly hiding all messy wires and providing ample storage for media consoles and accessories.', 
  '49', 
  'Wire Management: Completely hidden cabling for a clean, minimalist look.', 
  'Floating Designs: Modern wall-mounted units that free up floor space.', 
  'Premium Finishes: Available in PU, veneer, acrylic, and laminate to match your decor.'
));
