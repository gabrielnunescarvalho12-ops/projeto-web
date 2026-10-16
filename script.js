//const nome = "Gabriel Nunes";

// console.log("Olá mundo")
// console.log(nome)
// console.log(nome + " tecnico de analise e desenvolvimento de sistema")

//let projetosFeitos = 2;
//projetosFeitos = projetosFeitos + 9;

// console.log(nome + " possui " + projetosFeitos + " projetos")

//const profissao = "tecnico de analise e desenvolvimento de sistema";
//const cidade = "Peabiru";
//const anoAtual = 2026;
//const anoNascimento = 2004;
//const anoDeCurso = 2024

//const idade = anoAtual - anoNascimento
//const curso = anoAtual- anoDeCurso

// console.log(nome + " possui " + idade + " de idade, trabalha como " + profissao + " e mora em " + cidade + ".")

//const titulo = `Oi, eu sou ${nome}`

//const bio = ` possui ${idade} de idade, ${curso} de curso, trabalha com ${profissao} e mora em ${cidade}. `

//console.log(titulo + bio)

//document.querySelector(".hero h1").textContent = nome
//document.querySelector(".hero h2").textContent = `${profissao} - ${cidade}`

//const birthday = new Date("July, 28 2004");

//document.querySelector(".hero p").textContent = `${bio} - data de aniversario ${birthday.getDate()}/${birthday.getMonth() + 1}/${birthday.getFullYear()}`

//qconst hora = new Date().getHours();

//document.querySelector(".rodape h5").textContent = nome

//document.querySelector(".rodape p").textContent = `Feito com HTML, CSS e JavaScript - ${hora}h`

const idade = 18; 
const ingressolut = "inteira"; 
const ingressolta = "meia"; 
const ingresso = true; 
const documento = false; 

if(idade >= 18) {
    console.log("maior de idade");
}else{
    console.log("menor de idade"); 
}

if (idade === 18 && ingresso === true){
    console.log("passa"); 
}else if (documento === true){
    console.log("passa");
}else{
    console.log("nao passa");
}

//tipagem
// string e sempre texto - "" ''
//number e sempre um numero 
// bolean e verdadeiro ou falso - true ou false

let saudacao = "";
const hora = new Date().getHours();
const nome = "Gabriel Nunes"; 

if(hora <12){
    saudacao = "bom dia";
}else if( hora < 18) {
    saudacao = "boa tarde";
}else{
    console.log(hora)
    saudacao = "boa noite"; 
}

//document.querySelector(".hero h1").textContent = `${saudacao} eu sou ${nome}`;

// const pagina = document.querySelector("html");
// const botaoTema = document.querySelector(".botao-tema"); 
// 
// botaoTema.addEventListener("click", function () {
    // pagina.classList.toggle("modo-escuro");
// 
    // if(pagina.classList.contains("modo-escuro")){
        // botaoTema.textContent = "☀️"; 
    // }else{
        // botaoTema.textContent = "🌙";
    // }
// });

// exercicio 

const botao = "contato"
document.querySelector(".botao").textContent = botao;

// aula 3: function

function mostrarBoasVindas() {
    console.log("Bem vindo ao meu site.");
}

mostrarBoasVindas(); 

const cidade = "campo mourao"; 

function mostrarCidade(){
    console.log(cidade);
}

mostrarCidade(); 

function escreverPagina(seletor, texto){
    document.querySelector(seletor).textContent = texto
}

escreverPagina(".logo", "gabrielDev");
escreverPagina(".sobre h2", "sobre");  

function dobro(numero){
    return numero * 2
}

console.log(dobro(5))
console.log(dobro(6))
console.log(dobro(2))

function mostrarSaudacao(horaAtual) {
    if(horaAtual < 12){
        return "bom dia"
    }else if (horaAtual < 18){
        return "boa tarde"
    }else{
        return "boa noite"
    }
}

escreverPagina(".hero h1", `${mostrarSaudacao(hora)}! eu sou ${nome}`)

const pagina = document.querySelector("html")
const botaoTema = document.querySelector(".botao-tema")

function alternarTema() {
    pagina.classList.toggle("modo-escuro")

     if(pagina.classList.contains("modo-escuro")){
         botaoTema.textContent = "☀️"; 
 }else{
         botaoTema.textContent = "🌙";
 }

}

botaoTema.addEventListener("click", alternarTema)

/*funcao menu-hamburguer*/

const botaoMenu = document.querySelector(".botao-menu")
const menu = document.querySelector(".topo nav")

function abrirMenu() {
    menu.classList.add("aberto")
    botaoMenu.textContent = "X"
    botaoMenu.setAttribute("aria-expanded", "true")
}

function fecharMenu(){
    menu.classList.remove("aberto")
    botaoMenu.textContent = "☰"
    botaoMenu.setAttribute("aria-expandad", "false")
}

function alternarMenu(){
    if(menu.classList.contains("aberto")){
        fecharMenu(); 
    }else{
        abrirMenu();
    }
}

botaoMenu.addEventListener("click", alternarMenu) 

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
        return"";
    }
}

function validarEmail(email) {
    if (email === "") {
        return "digite o seu e-mail"
    }else if (email.icludes ("@") === false) {
        return "o e-mail precisa ter @"
    }else if (email.includes (".") === false){
        return "O e-mail precisa ter um ponto, como em.com."; 
    }else{
        return ""; 
    }
}

function validarAssunto(assunto) {
    if(assunto === "") {
        return "Escolha um assunto."; 
    }else{
        return "";
    }
}

function valitarMensagem(mensagem){
    if(mensagem === "") {
        return "Escreva uma mensagem."; 
    }else if(mensagem.length < 10){
        return "A mensagem precisa ter pelo menos 10 letras."; 
    }else{
        return ""; 
    }
}

function mostrarAviso(texto, tipo) {
    aviso.textContent = texto;
    aviso.classList.remove("erro");
    aviso.classList.remove("certo");
    aviso.classList.add(tipo);
}

 function enviarMensagem(evento) {
    evento.preventDefault()

    const nome = campo_nome.value.trim();
    const email = campo_email.value.trim();
    const assunto = campo_assunto.value.trim();
    const mensagem = campo_mensagem.value.trim();

    const erro_nome = validarNome(nome)
    const erro_email = validarEmail(email)
    const erro_assunto = validarAssunto(assunto)
    const erro_mensagem = validarMensagem(mensagem)

    if (erro_nome !== "") {
      mostrarAviso(erro_nome, "erro")
    } else if (erro_email !== "") {
      mostrarAviso(erro_email, "erro")
    } else if (erro_assunto !== "") {
      mostrarAviso(erro_assunto, "erro")
    } else if (erro_mensagem !== "") {
      mostrarAviso(erro_mensagem, "erro")
    } else {
      mostrarAviso(`Mensagem Enviada! Valeu ${nome}.`, "certo")
    }
  }

  formulario.addEventListener("submit", enviarMensagem)
