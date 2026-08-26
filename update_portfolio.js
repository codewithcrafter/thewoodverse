const fs = require('fs');

let portfolio = fs.readFileSync('portfolio.html', 'utf8');

const filterHtml = `
      <div class="portfolio-filters text-center" style="margin-bottom:40px;display:flex;flex-wrap:wrap;justify-content:center;gap:16px;">
        <button class="filter-btn active" data-filter="all" style="padding:8px 24px;border:1px solid var(--border-color);background:var(--dark-color);color:var(--white-color);border-radius:30px;cursor:pointer;transition:all 0.3s;">All Projects</button>
        <button class="filter-btn" data-filter="l-shaped" style="padding:8px 24px;border:1px solid var(--border-color);background:transparent;color:var(--dark-color);border-radius:30px;cursor:pointer;transition:all 0.3s;">L-Shaped Kitchens</button>
        <button class="filter-btn" data-filter="u-shaped" style="padding:8px 24px;border:1px solid var(--border-color);background:transparent;color:var(--dark-color);border-radius:30px;cursor:pointer;transition:all 0.3s;">U-Shaped Kitchens</button>
        <button class="filter-btn" data-filter="island" style="padding:8px 24px;border:1px solid var(--border-color);background:transparent;color:var(--dark-color);border-radius:30px;cursor:pointer;transition:all 0.3s;">Island Kitchens</button>
      </div>
      <div class="gallery-grid" id="portfolio-gallery">
`;

// Replace the `<div class="gallery-grid">` with the filter bar + grid
if(!portfolio.includes('portfolio-filters')) {
  portfolio = portfolio.replace('<div class="gallery-grid">', filterHtml);
}

// Now we need to add categories to the images.
// Images are 8,9,10 and 26-68. We'll distribute them randomly among l-shaped, u-shaped, island.
portfolio = portfolio.replace(/<img src="assets\/images\/thewoodverse\/(\d+)\.png" (.*?)>/g, (match, p1, p2) => {
    const num = parseInt(p1);
    let cat = 'l-shaped';
    if(num % 3 === 0) cat = 'island';
    else if(num % 2 === 0) cat = 'u-shaped';
    
    return `<div class="portfolio-item" data-category="${cat}" style="transition:all 0.4s ease;"><img src="assets/images/thewoodverse/${p1}.png" ${p2}></div>`;
});

// Also need to add the filter script at the bottom.
const scriptHtml = `
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active class
        filterBtns.forEach(b => {
          b.style.background = 'transparent';
          b.style.color = 'var(--dark-color)';
        });
        btn.style.background = 'var(--dark-color)';
        btn.style.color = 'var(--white-color)';
        
        const filter = btn.getAttribute('data-filter');
        
        items.forEach(item => {
          if(filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => { item.style.display = 'none'; }, 400);
          }
        });
      });
    });
  });
</script>
`;

if(!portfolio.includes('filterBtns.forEach')) {
  portfolio = portfolio.replace('</body>', scriptHtml + '\n</body>');
}

fs.writeFileSync('portfolio.html', portfolio);
console.log('portfolio.html updated with filters');
