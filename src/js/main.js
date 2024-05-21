const header = document.getElementsByClassName("site-header")[0];
const nav = document.getElementsByClassName("site-nav")[0];
let scrollHeight = 0;
let width = window.innerWidth;

// ***** project templates *****
document.addEventListener("DOMContentLoaded", function () {
  fetch("./src/data/projects.json")
    .then((response) => response.json())
    .then((data) => {
      const projectsSection = document.getElementById("projects");
      const projectsList = document.createElement("ul");

      data.forEach((project) => {
        const projectItem = document.createElement("li");
        projectItem.classList.add("projects-featured");

        const projectContent = document.createElement("div");
        projectContent.classList.add(
          "project-content-" +
            (data.indexOf(project) % 2 === 0 ? "left" : "right")
        );

        const projectOverline = document.createElement("p");
        projectOverline.classList.add("project-overline");
        projectOverline.textContent = project.type;

        const projectTitle = document.createElement("a");
        projectTitle.setAttribute("aria-label", "Demo Link");
        projectTitle.setAttribute("target", "_blank");
        projectTitle.setAttribute("rel", "noopener noreferrer");
        projectTitle.setAttribute("href", project.demo);
        const projectTitleText = document.createElement("h3");
        projectTitleText.classList.add("project-title");
        projectTitleText.textContent = project.title;
        projectTitle.appendChild(projectTitleText);

        const projectDescription = document.createElement("div");
        projectDescription.classList.add("project-description");
        const projectDescriptionText = document.createElement("p");
        projectDescriptionText.innerHTML = project.description;
        projectDescription.appendChild(projectDescriptionText);

        const projectTechList = document.createElement("ul");
        projectTechList.classList.add("project-tech-list");
        project.tech.forEach((tech) => {
          const techItem = document.createElement("li");
          techItem.textContent = tech;
          projectTechList.appendChild(techItem);
        });

        const projectLinks = document.createElement("div");
        projectLinks.classList.add("project-links");

        const githubLink = document.createElement("a");
        githubLink.setAttribute("aria-label", "Github Link");
        githubLink.setAttribute("target", "_blank");
        githubLink.setAttribute("rel", "noopener noreferrer");
        githubLink.setAttribute("href", project.github);
        githubLink.innerHTML = '<i class="ri-github-line icon"></i>';
        projectLinks.appendChild(githubLink);

        const demoLink = document.createElement("a");
        demoLink.setAttribute("aria-label", "Demo Link");
        demoLink.setAttribute("target", "_blank");
        demoLink.setAttribute("rel", "noopener noreferrer");
        demoLink.setAttribute("href", project.demo);
        demoLink.innerHTML = '<i class="ri-window-line icon"></i>';
        projectLinks.appendChild(demoLink);

        const projectImage = document.createElement("div");
        projectImage.classList.add(
          "project-image-" +
            (data.indexOf(project) % 2 === 0 ? "right" : "left")
        );
        const projectImageLink = document.createElement("a");
        projectImageLink.setAttribute("href", project.demo);
        projectImageLink.setAttribute("target", "_blank");
        const projectImg = document.createElement("img");
        projectImg.setAttribute("src", project.image);
        projectImg.setAttribute("data-gif", project.gif);
        projectImg.setAttribute("alt", "A preview image of the project");
        projectImg.classList.add("project-image-image");
        projectImg.addEventListener("mouseover", function () {
          this.src = this.getAttribute("data-gif");
        });
        projectImg.addEventListener("mouseout", function () {
          this.src = project.image;
        });
        projectImageLink.appendChild(projectImg);
        projectImage.appendChild(projectImageLink);

        projectContent.appendChild(projectOverline);
        projectContent.appendChild(projectTitle);
        projectContent.appendChild(projectDescription);
        projectContent.appendChild(projectTechList);
        projectContent.appendChild(projectLinks);
        projectItem.appendChild(projectContent);
        projectItem.appendChild(projectImage);
        projectsList.appendChild(projectItem);
      });

      projectsSection.appendChild(projectsList);

      // initialize animations after projects are loaded
      initializeAnimations();
    })
    .catch((error) => console.error("Error fetching the projects:", error));
});
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
function initializeAnimations() {
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

  /* ***** scroll reveal animations ***** */
  const sr = ScrollReveal({
    distance: "100px",
    duration: 2400,
    reset: false,
  });

  if (window.innerWidth > 500) {
    sr.reveal(
      `.main-heading,
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

    sr.reveal(
      `.project-image-left,
       .project-content-left`,
      {
        origin: "left",
        interval: 300,
      }
    );

    sr.reveal(
      `.project-image-right,
       .project-content-right,
       .about-img`,
      {
        origin: "right",
        interval: 300,
      }
    );

    sr.reveal(`.contact-btn`, {
      origin: "top",
      interval: 125,
      distance: "10px",
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
}
