document.addEventListener("DOMContentLoaded", function() {
  const main = document.querySelector('.cartao');
  main.classList.add('aparece');
});


function showTooltip(tech) {
  var tooltip = document.querySelector('.magica');
  tooltip.innerHTML = tech;
  tooltip.style.display = 'block';
  tooltip.style.opacity = 1; 
}

function hideTooltip() {
  var tooltip = document.querySelector('.magica');
  tooltip.style.opacity = 0; 
  setTimeout(() => {
      tooltip.style.display = 'none';
  }, 300); 
}