const slides = document.querySelectorAll(".carousel_slide");
const leftArrow = document.querySelector(".carousel_button--right");
const rightArrow = document.querySelector(".carousel_button--left");

const allSlides = slides.length;

rightArrow.addEventListener("click", prevSlide);
leftArrow.addEventListener("click", nextSlide);

function nextSlide() {
  slidePosition = (slidePosition + 1) % allSlides;
  showSlide();
}

function prevSlide() {
  slidePosition = (slidePosition - 1 + allSlides) % allSlides;
  showSlide();
}

function showSlide() {
  slides.forEach((s, index) => {
    if (index === slidePosition) {
      s.style.display = "flex";
    } else {
      s.style.display = "none";
    }
  });
}

let slidePosition = 0;
showSlide();
