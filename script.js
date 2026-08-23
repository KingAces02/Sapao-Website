document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("show");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});

// /navigation/
const navBar = document.querySelector(".nav");

if (navBar) {
  const setScrolled = () => {
    if (window.scrollY > 20) {
      navBar.classList.add("scrolled");
    } else {
      navBar.classList.remove("scrolled");
    }
  };
  setScrolled();
  window.addEventListener("scroll", setScrolled);
}

// scroll-reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
