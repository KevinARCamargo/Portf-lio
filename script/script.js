document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
  
    let currentIndex = 0;
  
    nextButton.addEventListener("click", function () {
      showSlide(currentIndex + 1);
    });
  
    prevButton.addEventListener("click", function () {
      showSlide(currentIndex - 1);
    });
  
    function showSlide(index) {
      const totalSlides = document.querySelectorAll(".carousel-item").length;
  
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }
  
      const translateValue = -index * 100 + "%";
      carousel.style.transform = "translateX(" + translateValue + ")";
      currentIndex = index;
    }
});

function toggleMenu() {
  const menu = document.querySelector('.itens-menu');
  menu.classList.toggle('menu-aberto');
}

  