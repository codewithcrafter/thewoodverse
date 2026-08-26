const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzWSIEMOzmw0gG3Axfkw6rF_1HT4RdpHBmZqcugUsli7xoAefsGULdIL3LXqUjr5hdXGg/exec";

const contactData = {
  source: "Contact Form",
  name: "Rahul Sharma",
  phone: "9876543210",
  email: "",
  location: "Delhi",
  project: "Modular Kitchen",
  budget: "5 Lakhs"
};

const quoteData = {
  source: "Get Quote Form",
  name: "Amit Sharma",
  phone: "9812345678",
  email: "amit@example.com",
  location: "Noida",
  services: "Modular Kitchen, Wardrobes",
  propertyType: "Apartment (3-4 BHK)",
  additionalDetails: "Modern design required"
};

async function testSubmit(data) {
  try {
    // Mode no-cors means we can't read the response properly, but since this is node, we don't need no-cors. Let's just fetch it normally so we can see the response.
    // However, the browser uses no-cors because it doesn't want to handle the redirect and CORS policy. We can follow redirects in node fetch.
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(data)
    });
    const text = await res.text();
    console.log("Success for " + data.source + ":", text);
  } catch (error) {
    console.error("Error for " + data.source + ":", error);
  }
}

testSubmit(contactData).then(() => testSubmit(quoteData));
