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
