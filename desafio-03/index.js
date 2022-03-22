//Primeiro tenho que pegar o botão
const BotaoDeEnvio = document.getElementById('btnEnviar');
//tenho que pegar os inputs


function FormularioDeCadastro(check){
    check.preventDefault();
    let nomeUsuario = document.querySelector("#nome");
    let emailUsuario = document.getElementById("email");
    let numeroUsuario = document.getElementById("telefone");
    let texto = document.querySelector("#texto");
    
    if(nomeUsuario.value === ""){
        nomeUsuario.classList.add("active");
    }else{
        nomeUsuario.classList.remove("active");
    }

    if(emailUsuario.value.indexOf("@") === -1 || emailUsuario.value === ("")){
        emailUsuario.classList.add("active");
    }else{
        emailUsuario.classList.remove("active");
    }

    if(numeroUsuario.value === "" || numeroUsuario.value.length <= 3){
        numeroUsuario.classList.add("active");
    }else{
        numeroUsuario.classList.remove('active');
    }

    if(texto.value === ""){
        texto.classList.add("active");
    }else{
        texto.classList.remove("active");
    }
};

BotaoDeEnvio.addEventListener('click', FormularioDeCadastro);