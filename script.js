// aula 4 formulario 

const formulario = document.querySelector("#from-contato" );
const campoNome = document.querySelector("#nome"); 
const campoEmail = document.querySelector("#email"); 
const campoAssunto = document.querySelector("#assunto"); 
const campoMensagem = document.querySelector("#mensagem"); 
const aviso = document.querySelector("#aviso") 

function validarNome(nome) {
    if(nome === ""){
        return "digite seu nome"
    } else if (nome.length < 3){
        return "o nome precisa ter pelo menos 3 letras."
    }else{
        return""
    }
}

function validarEmail(email) {
    if (email === "") {
        return "digite o seu email"
    }else if (email.icludes (".") === false) {
        
    }
}
