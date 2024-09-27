// Existing code
const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const fa = document.querySelector(".fa");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    video.play();
    fa.classList.add("fa-pause");
    fa.classList.remove("fa-play");
  } else {
    btn.classList.add("pause");
    video.pause();
    fa.classList.remove("fa-pause");
    fa.classList.add("fa-play");
  }
});

// New code
const containerEl = document.querySelector(".container");
const careers = ["YouTuber", "Web Developer", "Student", "Tech Enthusiast"];
let careerIndex = 0;
let characterIndex = 0;

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}
    `;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}

// Start the text update and hide preloader when the page loads
window.addEventListener("load", () => {
  preloader.style.zIndex = "-999";
  updateText(); // Start the text animation
});

const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;

prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

// Scroll behavior
const galleryCard = document.querySelector('.gallery-card');
galleryCard.style.opacity = '0';
galleryCard.style.transform = 'translateY(50px)';
galleryCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const galleryPosition = galleryCard.offsetTop;

  if (scrollPosition > galleryPosition) {
    galleryCard.style.opacity = '1';
    galleryCard.style.transform = 'translateY(0)';
    if (!timer) {
        updateGallery(); // Start the gallery rotation when it becomes visible
      }
  }
});

// Initialize gallery when the page loads
window.addEventListener('load', () => {
  // Existing code...
  
  // Trigger scroll event to check initial position
  window.dispatchEvent(new Event('scroll'));
});