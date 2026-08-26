const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Fix Issue 1: Remove literal '\n'
  content = content.replace(/\\n/g, '');

  // Fix Issue 2: Remove 'on-light' from the header so it's transparent (white text) at the top
  content = content.replace(/class="site-header on-light"/g, 'class="site-header"');

  fs.writeFileSync(path.join(dir, file), content);
  console.log('Fixed', file);
});
