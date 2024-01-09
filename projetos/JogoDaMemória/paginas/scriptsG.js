var flippedCards = []; 
var pares = 0;
var imagens = [
  {image:'../imagens/abelha.png', counter: 2},
  {image:'../imagens/baleia.png', counter: 2},
  {image:'../imagens/cachorro.png', counter: 2},
  {image:'../imagens/coelho.png', counter: 2},
  {image:'../imagens/coruja.png', counter: 2},
  {image:'../imagens/pinguim.png', counter: 2},
  {image:'../imagens/elefante.png', counter: 2},
  {image:'../imagens/gato.png', counter: 2},
  {image:'../imagens/hipopotamo.png', counter: 2},
  {image:'../imagens/jacare.png', counter: 2},
  {image:'../imagens/golfinho.png', counter: 2},
  {image:'../imagens/lobo.png', counter: 2},
  {image:'../imagens/macaco.png', counter: 2},
  {image:'../imagens/panda.png', counter: 2},
  {image:'../imagens/zebra.png', counter: 2},
  {image:'../imagens/preguica.png', counter: 2},
  {image:'../imagens/tigre.png', counter: 2},
  {image:'../imagens/unicornio.png', counter: 2},
  {image:'../imagens/urso.png', counter: 2},
  {image:'../imagens/vaca.png', counter: 2},
  
];

function shuffle() {
  var aux;
  const cards = document.querySelectorAll('.card');

  cards.forEach(function(card) {
    var id = Math.floor(Math.random() * imagens.length);
    var imagemSelected = imagens[id];
    if(imagens[id].counter > 0){
        card.style.backgroundImage = `url('${imagemSelected.image}')`;
        imagens[id].counter --;
    }else{
      while(aux != 1){
        var id = Math.floor(Math.random() * imagens.length);
        var imagemSelected = imagens[id];
        if(imagens[id].counter > 0){
            card.style.backgroundImage = `url('${imagemSelected.image}')`;
            imagens[id].counter --;
            aux = 1;
        }
      }
      aux = 0;
    }
    
  });
}


function flip(element) {
  if(!element.classList.contains('cardFlipped')) {
    element.classList.toggle('cardFlipped');
    flippedCards.push(element); 
    if (flippedCards.length === 2) {
      if (flippedCards[0].style.backgroundImage === flippedCards[1].style.backgroundImage) {
        pares ++;
        flippedCards = [];
      } else {
        setTimeout(function() {
          flippedCards.forEach(function(card) {
            card.classList.remove('cardFlipped');
          });
          flippedCards = [];
        }, 200);
      }
    }
  }
  if (pares === 20) {
    exibirTelaParabens();
  }
}

function exibirTelaParabens() {
  var telaParabens = document.getElementById('parabens');
  telaParabens.style.display = 'block';
}
