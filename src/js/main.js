/* ***** anime js animations ***** */
document.addEventListener("DOMContentLoaded", () => {
  // navigation links animation
  anime({
    targets: ".nav-item",
    translateX: [-50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: anime.stagger(100, { start: 2500 }),
  });

  // social icons animation
  anime({
    targets: ".socials",
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: anime.stagger(100, { start: 3000 }),
  });

  // name heading animation
  anime({
    targets: ".name-heading span",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    delay: anime.stagger(100),
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
    `
    .main-heading,
     .subheading,
     .intro-text,
     .cta-btn`,
    {
      origin: "top",
      interval: 200,
      distance: "10px",
      delay: 1500,
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
