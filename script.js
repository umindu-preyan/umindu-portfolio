// Loader animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 800);
});

// Typewriter Effect
const words = ["Web Designer", "Developer", "Creative Thinker"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 100;

function typeEffect() {
  const typewriter = document.querySelector(".typewriter");
  if (!typewriter) return;

  currentWord = words[i];
  if (isDeleting) {
    typewriter.textContent = currentWord.substring(0, j--);
  } else {
    typewriter.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll Reveal Animation
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;
    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
