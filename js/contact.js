// js/contact.js

// Make sure EmailJS is loaded via script in contact.html
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      }, (error) => {
        console.error("FAILED...", error);
        alert("Message failed to send. Please try again later.");
      });
  });
});
