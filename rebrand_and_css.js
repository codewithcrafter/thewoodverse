const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  content = content.replace(/Urban<span>Craft<\/span>/g, 'The <span>Woodverse</span>');
  content = content.replace(/Urban <span>Craft<\/span>/g, 'The <span>Woodverse</span>');
  content = content.replace(/UrbanCraft/ig, 'The Woodverse');
  fs.writeFileSync(path.join(dir, file), content);
  console.log('Updated', file);
});

// Update CSS
const cssPath = path.join(dir, 'assets/css/layout.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Add transitions if not present
if (!css.includes('transition: color 0.3s ease;')) {
  css = css.replace('.main-nav a{', '.main-nav a{transition: color 0.3s ease, background 0.3s ease; ');
  css = css.replace('.logo{', '.logo{transition: color 0.3s ease; ');
  css = css.replace('.logo span{', '.logo span{transition: color 0.3s ease; ');
}

fs.writeFileSync(cssPath, css);
console.log('Updated layout.css');
