console.log('🚀 Main.js is loaded');

const sr = ScrollReveal({
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: false,
});

sr.reveal('#info-image', {
  origin: 'left',
});

sr.reveal('#info-specs', {Y
  origin: 'right',
  delay: 300,
});

const menuIcon = document.getElementById("menu-icon");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");

  // Change icon
  if (navMenu.classList.contains("show-menu")) {
    menuIcon.classList.remove("ri-menu-line");
    menuIcon.classList.add("ri-close-line");
  } else {
    menuIcon.classList.remove("ri-close-line");
    menuIcon.classList.add("ri-menu-line");
  }
});


