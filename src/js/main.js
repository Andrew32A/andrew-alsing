const header = document.getElementsByClassName("site-header")[0];
const nav = document.getElementsByClassName("site-nav")[0];
let scrollHeight = 0;
let width = window.innerWidth;

// ***** show/hide nav on scroll *****
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollHeight > 140) {
    header.classList.add("scroll-header");
  } else if (scrollHeight < 140) {
    header.classList.remove("scroll-header");
  }

  if (scrollHeight < scrollY) {
    header.classList.add("hide-header");
  } else {
    header.classList.remove("hide-header");
  }

  if (window.innerWidth < 480 && window.scrollY < 80) {
    header.classList.remove("hide-header");
  }

  scrollHeight = scrollY;
});

/* ***** anime js animations ***** */
document.addEventListener("DOMContentLoaded", () => {
  // navigation links animation
  anime({
    targets: ".nav-item",
    translateX: [-50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: anime.stagger(100, { start: 2000 }),
  });

  // social icons animation
  anime({
    targets: ".socials",
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: anime.stagger(100, { start: 2500 }),
  });

  // name heading animation
  anime({
    targets: ".name-heading span",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 200,
    delay: anime.stagger(80),
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
      delay: 900,
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
