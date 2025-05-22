document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});

// /navigation/
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('nav-links li a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');

  } else {
    nav.classList.remove('scrolled');
  }
});

// animation code
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const pictureObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } 
  });
});

// Target only the picture blocks
const pictureElements = document.querySelectorAll('.picture1, .picture2, .picture3');
pictureElements.forEach((el) => pictureObserver.observe(el));

 const sections = document.querySelectorAll('.about-section');

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target.querySelector('.about-container');
        const text = container.querySelector('.about-text');
        const image = container.querySelector('.about-image');
        const isEven = [...sections].indexOf(entry.target) % 2 === 1;

        // Alternate animation direction
        text.classList.add(isEven ? 'animate-right' : 'animate-left');
        image.classList.add(isEven ? 'animate-left' : 'animate-right');

        observer2.unobserve(entry.target); // Animate once
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer2.observe(section));