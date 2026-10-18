const typingElement = document.querySelector(".typing");
const roles = ["Python Developer", "Data Science Enthusiast", "AI Developer"];

if (typingElement) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    typingElement.textContent = currentRole.substring(0, charIndex);

    if (!deleting && charIndex < currentRole.length) {
      charIndex++;
      window.setTimeout(typeEffect, 100);
    } else if (!deleting) {
      deleting = true;
      window.setTimeout(typeEffect, 1200);
    } else if (charIndex > 0) {
      charIndex--;
      window.setTimeout(typeEffect, 45);
    } else {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      window.setTimeout(typeEffect, 300);
    }
  }

  typeEffect();
}

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const sections = document.querySelectorAll("main .section");
if ("IntersectionObserver" in window) {
  sections.forEach(section => {
    section.classList.add("reveal-pending");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("reveal-pending");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach(section => observer.observe(section));
} else {
  sections.forEach(section => section.classList.remove("reveal-pending"));
<<<<<<< HEAD
}
=======
}
>>>>>>> 968b8a2 (Add portfolio website)
