// header.js

function initHeader() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".nav-link");

  // Safety check
  if (!hamburger || !nav || navLinks.length === 0) return;

  /* =========================
     HAMBURGER TOGGLE
  ========================= */
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  /* =========================
     ACTIVE LINK (URL BASED)
  ========================= */
  const currentPath = window.location.pathname
    .split("/")
    .pop(); // e.g. contact.html

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href")
      .split("/")
      .pop();

    link.classList.remove("active");

    // Home page handling
    if (
      (currentPath === "" || currentPath === "index.html") &&
      linkPath === "index.html"
    ) {
      link.classList.add("active");
    }

    // Other pages
    if (linkPath === currentPath && currentPath !== "") {
      link.classList.add("active");
    }

    /* =========================
       CLOSE MENU ON CLICK
    ========================= */
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });
}
