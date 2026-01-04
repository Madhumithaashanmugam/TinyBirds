document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("form-success");

  if (!form) {
    console.error("Contact form not found");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojqgrgl", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        form.reset();                    // clear fields
        successMsg.style.display = "block"; // show success
        console.log("Form submitted successfully");
      } else {
        console.error("Formspree error");
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Please try again later.");
    }
  });
});
