(function () {
  const birds = document.querySelectorAll(".bird");

  function adjustBirdsForScreen() {
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth <= 768;

    birds.forEach((bird, index) => {
      bird.style.display = "block";

      // MOBILE
      if (isMobile) {
        if (index === 0) {
          bird.style.top = "18vh";
          bird.style.width = "42px";
        }
        if (index === 1) {
          bird.style.top = "62vh";
          bird.style.width = "38px";
        }
        if (index === 2) {
          bird.style.top = "98vh";
          bird.style.width = "54px";
        }
      }

      // TABLET
      else if (isTablet) {
        if (index === 0) {
          bird.style.top = "20vh";
          bird.style.width = "46px";
        }
        if (index === 1) {
          bird.style.top = "38vh";
          bird.style.width = "42px";
        }
        if (index === 2) {
          bird.style.top = "55vh";
          bird.style.width = "60px";
        }
      }

      // DESKTOP
      else {
        if (index === 0) {
          bird.style.top = "25vh";
          bird.style.width = "52px";
        }
        if (index === 1) {
          bird.style.top = "102vh";
          bird.style.width = "46px";
        }
        if (index === 2) {
          bird.style.top = "150vh";
          bird.style.width = "70px";
        }
      }
    });
  }

  // Run on load
  adjustBirdsForScreen();

  // Run on resize
  window.addEventListener("resize", adjustBirdsForScreen);
})();
