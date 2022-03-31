let perguntas = document.querySelectorAll(".pergunta");
// console.log(perguntas)
let imagemSeta = document.querySelectorAll('#fechado');
console.log(imagemSeta)
let respostas = document.querySelectorAll('.resposta');
// console.log(respostas)

perguntas.forEach(pergunta =>{
    pergunta.addEventListener('click', () =>{
        pergunta.classList.add('abrir');
    });

    if(pergunta.classList.contains('abrir')){
        imagemSeta.forEach = "src/imagem/seta-colorida.png"
    }
});











