// ===============================
// NAVBAR SCROLL BEHAVIOR
// ===============================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===============================
// SMOOTH SCROLL (already supported in CSS, but ensures old browsers work)
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // offset for fixed header
        behavior: "smooth"
      });
    }
  });
});

// ===============================
// SCROLL REVEAL ANIMATIONS
// ===============================

const revealElements = document.querySelectorAll(
  ".about, .projects, .designs, .resume, .contact, .video-card"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

