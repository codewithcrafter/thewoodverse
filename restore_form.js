const fs = require('fs');
const cp = require('child_process');

// Get original contact.html content
const originalHtml = cp.execSync('git show HEAD:contact.html', { encoding: 'utf8' });

// Extract form section from original
const formStartMatch = originalHtml.match(/<form id="contact-form"[\s\S]*?<\/form>/);
if (!formStartMatch) {
    console.error("Could not find contact-form in original");
    process.exit(1);
}
const originalForm = formStartMatch[0];

// Get current contact.html content
const currentPath = 'c:\\Users\\techs\\Downloads\\thewoodverse\\contact.html';
let currentHtml = fs.readFileSync(currentPath, 'utf8');

// Replace the quote-form in current with original contact-form
const currentFormMatch = currentHtml.match(/<form id="quote-form"[\s\S]*?<\/form>/);
if (!currentFormMatch) {
    console.error("Could not find quote-form in current");
    process.exit(1);
}

currentHtml = currentHtml.replace(/<form id="quote-form"[\s\S]*?<\/form>/, originalForm);
fs.writeFileSync(currentPath, currentHtml, 'utf8');
console.log("Successfully restored contact-form in contact.html");
