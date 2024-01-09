document.addEventListener("DOMContentLoaded", function() {
  const main = document.querySelector('.cartao');
  main.classList.add('aparece');
});

// Definindo as funções no escopo global
let slideIndex = 1;

function mudarSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carrossel-slide");
  let indicadores = document.getElementsByClassName("carrossel-indicador");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < indicadores.length; i++) {
    indicadores[i].className = indicadores[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  indicadores[slideIndex - 1].className += " active";
}

// Aguardando o DOM ser carregado
document.addEventListener("DOMContentLoaded", function() {
  const main = document.querySelector('.cartao');
  main.classList.add('aparece');

  // Chamando a função para iniciar o carrossel
  showSlides(slideIndex);
});
