const prev = document.querySelector('.voltar');
const next = document.querySelector('.avancar');
let slides =  document.querySelectorAll('.carousel');
console.log(slides)
let index = 0;

function novoSlider(){
    slides[index].classList.remove("ativa");
}


function sliderAnterior(){
    slides[index].classList.remove("ativa");
}

prev.addEventListener("click",sliderAnterior)
next.addEventListener("click",novoSlider);











