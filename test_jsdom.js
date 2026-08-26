const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

const html = fs.readFileSync("index.html", "utf-8");
const js = fs.readFileSync("assets/js/main.js", "utf-8");

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  url: "http://localhost"
});

dom.window.matchMedia = function() {
  return { matches: false };
};
dom.window.sessionStorage = {
  getItem: () => null,
  setItem: () => {}
};

dom.window.onerror = function(msg, source, lineno, colno, error) {
  console.log("JSDOM Error:", msg, lineno, colno, error);
};

try {
  dom.window.eval(js);
  console.log("JS executed successfully.");
  dom.window.document.dispatchEvent(new dom.window.Event("DOMContentLoaded"));
  console.log("DOMContentLoaded triggered.");
} catch(e) {
  console.log("Caught Error:", e);
}
