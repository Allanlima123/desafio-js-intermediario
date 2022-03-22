let accordeons = document.querySelectorAll(".accordeon");
// console.log(accordeons)
let abrirAccordeon = document.querySelectorAll('.resposta');
// console.log(abrirAccordeon)

accordeons.forEach(accordeon =>{
    accordeon.addEventListener("click",()=>{
        abrirAccordeon.forEach(abrir =>{
            abrir.classList.remove('abrir');
        })
        accordeon.classList.add('abrir');
    });
});










