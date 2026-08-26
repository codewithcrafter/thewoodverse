const fs = require('fs');

const quoteHtml = fs.readFileSync('c:\\Users\\techs\\Downloads\\thewoodverse\\get-quote.html', 'utf8');
const quoteFormMatch = quoteHtml.match(/<form id="quote-form"[\s\S]*?<\/form>/);
if (!quoteFormMatch) {
    console.error("Could not find quote-form in get-quote.html");
    process.exit(1);
}
const newForm = quoteFormMatch[0];

const contactPath = 'c:\\Users\\techs\\Downloads\\thewoodverse\\contact.html';
let contactHtml = fs.readFileSync(contactPath, 'utf8');

const contactFormMatch = contactHtml.match(/<form id="quote-form"[\s\S]*?<\/form>/);
if (!contactFormMatch) {
    console.error("Could not find quote-form in contact.html");
    process.exit(1);
}

// Replace quote-form with the new quote-form
contactHtml = contactHtml.replace(/<form id="quote-form"[\s\S]*?<\/form>/, newForm);

// Ensure quote.js is included in contact.html if it's not already there
if (!contactHtml.includes('quote.js')) {
    contactHtml = contactHtml.replace('<script src="assets/js/main.js"></script>', '<script src="assets/js/main.js"></script>\n<script src="assets/js/quote.js"></script>');
}

fs.writeFileSync(contactPath, contactHtml, 'utf8');
console.log("Successfully replaced contact form with get-quote form.");
