const fs = require('fs');

let html = fs.readFileSync('portfolio.html', 'utf8');

const lightboxModal = `
<div id="lightbox-modal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;align-items:center;justify-content:center;padding:20px;">
  <span id="lightbox-close" style="position:absolute;top:20px;right:40px;color:#fff;font-size:40px;cursor:pointer;">&times;</span>
  <img id="lightbox-img" src="" style="max-width:90vw;max-height:90vh;border-radius:8px;box-shadow:0 0 20px rgba(0,0,0,0.5);">
</div>
`;

if (!html.includes('id="lightbox-modal"')) {
  html = html.replace('</body>', lightboxModal + '\n</body>');
}

const scriptBlock = `
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const items = document.querySelectorAll('.portfolio-item img');

    items.forEach(img => {
      img.style.cursor = 'pointer';
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
  });
</script>
`;

if (!html.includes('lightbox-modal')) {
  // we did this above, just need to check if script is there
}

if (!html.includes("modalImg.src = e.target.src")) {
  html = html.replace('</body>', scriptBlock + '\n</body>');
}

fs.writeFileSync('portfolio.html', html);
console.log('portfolio.html lightbox updated');
