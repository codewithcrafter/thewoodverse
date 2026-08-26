const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const mainStartIdx = indexHtml.indexOf('<main>');
const mainEndIdx = indexHtml.indexOf('</main>');

const topTemplate = indexHtml.substring(0, mainStartIdx + 6);
const bottomTemplate = indexHtml.substring(mainEndIdx);

const pages = [
  { file: 'about.html', title: 'About Us | The Woodverse Interiors', nav: 'about.html' },
  { file: 'services.html', title: 'Our Services | The Woodverse Interiors', nav: 'services.html' },
  { file: 'contact.html', title: 'Contact Us | The Woodverse Interiors', nav: 'contact.html' },
  { file: 'get-quote.html', title: 'Get a Quote | The Woodverse Interiors', nav: 'get-quote.html' },
  { file: 'book-appointment.html', title: 'Book Free Consultation | The Woodverse Interiors', nav: '' },
  { file: 'home-interiors.html', title: 'Complete Home Interiors | The Woodverse Interiors', nav: 'services.html' },
  { file: 'living-room.html', title: 'Living Room Interiors | The Woodverse Interiors', nav: 'services.html' },
  { file: 'bedroom.html', title: 'Bedroom Interiors | The Woodverse Interiors', nav: 'services.html' },
  { file: 'tv-units.html', title: 'Custom TV Units | The Woodverse Interiors', nav: 'services.html' },
  { file: 'process.html', title: 'Our Process | The Woodverse Interiors', nav: '' },
  { file: 'why-us.html', title: 'Why Choose Us | The Woodverse Interiors', nav: '' },
  { file: 'faq.html', title: 'Frequently Asked Questions | The Woodverse Interiors', nav: '' },
  { file: 'privacy-policy.html', title: 'Privacy Policy | The Woodverse Interiors', nav: '' },
  { file: 'terms.html', title: 'Terms & Conditions | The Woodverse Interiors', nav: '' },
];

pages.forEach(p => {
  let pageTop = topTemplate.replace(/<title>.*?<\/title>/s, `<title>${p.title}</title>`);
  
  pageTop = pageTop.replace(/class="active"/g, '');
  if (p.nav) {
    const navRegex = new RegExp(`href="${p.nav}"`);
    pageTop = pageTop.replace(navRegex, `href="${p.nav}" class="active"`);
  }

  pageTop = pageTop.replace('class="site-header"', 'class="site-header on-light"');
  // Avoid duplicating on-light if index.html already had it
  pageTop = pageTop.replace('class="site-header on-light on-light"', 'class="site-header on-light"');

  const content = `
  <section class="page-hero">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>${p.title.split(' |')[0]}</span></nav>
      <h1>${p.title.split(' |')[0]}</h1>
      <p>Premium interior solutions designed and manufactured for your lifestyle.</p>
    </div>
  </section>
  <section class="section-padding">
    <div class="container" id="page-content">
      <div class="text-center">
        <h2>Content coming soon...</h2>
      </div>
    </div>
  </section>
`;

  const finalHtml = pageTop + content + bottomTemplate;
  fs.writeFileSync(p.file, finalHtml);
  console.log(`Created ${p.file}`);
});
