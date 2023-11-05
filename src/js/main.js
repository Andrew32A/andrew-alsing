/* ***** anime js animations ***** */
document.addEventListener("DOMContentLoaded", () => {
  // navigation links animation
  anime({
    targets: ".nav-item",
    translateX: [-50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: anime.stagger(100),
  });

  // social icons animation
  anime({
    targets: ".socials a",
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: anime.stagger(100, { start: 1000 }),
  });
});

/* ***** scroll reveal animations ***** */
const sr = ScrollReveal({
  distance: "100px",
  duration: 2400,
  reset: false,
});

if (window.innerWidth > 500) {
  sr.reveal(
    `.home-section,
     .main-heading,
     .name-heading,
     .subheading,
     .intro-text,
     .cta-btn`,
    {
      origin: "top",
      interval: 200,
      distance: "40px",
    }
  );

  sr.reveal(
    `.about-section,
     .contact-section`,
    {
      origin: "bottom",
      interval: 300,
    }
  );

  sr.reveal(`.about-detail-left`, {
    origin: "left",
    interval: 300,
  });

  sr.reveal(`.about-detail-right`, {
    origin: "right",
    interval: 300,
  });
} else {
  sr.reveal(
    `.home-section,
     .about-section,
     .projects-section,
     .contact-section`,
    {
      origin: "bottom",
      interval: 200,
    }
  );
}
