const pagina = document.querySelector("html");
const botaoTema = document.querySelector(".botao-tema");

function alternarTema() {
  pagina.classList.toggle("modo-escuro");

  if (pagina.classList.contains("modo-escuro")) {
    botaoTema.textContent = "☀️";
  } else {
    botaoTema.textContent = "🌙";
  }
}

botaoTema.addEventListener("click", alternarTema);


/* ---------- Menu do celular (igual à parte 13 do script.js) ---------- */

const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector(".topo nav");

function abrirMenu() {
  menu.classList.add("aberto");
  botaoMenu.textContent = "✕";
  botaoMenu.setAttribute("aria-expanded", "true");
}

function fecharMenu() {
  menu.classList.remove("aberto");
  botaoMenu.textContent = "☰";
  botaoMenu.setAttribute("aria-expanded", "false");
}

function alternarMenu() {
  if (menu.classList.contains("aberto")) {
    fecharMenu();
  } else {
    abrirMenu();
  }
}

botaoMenu.addEventListener("click", alternarMenu);

  /*AULA 4 - FORMULARIO*/
   
   const formulario = document.querySelector("#form-contato");
   const campo_nome = document.querySelector("#nome");
   const campo_email= document.querySelector("#email");
   const campo_assunto = document.querySelector("#assunto");
   const campo_mensagem = document.querySelector("#mensagem");
   const aviso = document.querySelector("#aviso");

   function validarNome(nome) {
    if (nome === ""){
      return "Digite seu nome."
    } else if (nome.length < 3){
      return "O nome precisa ter pelo menos 3 letras."
    } else {
      return ""
    }
   }

   function validarEmail(email) {
    if (email === "") {
      return "Digite o seu E-mail."
    } else if (email.includes("@") === false) {
      return "Insira um e-mail válido."
    } else if (email.includes(".") === false) {
      return "Insira um e-mail válido."
    } else {
      return ""
    }
   }
  function validarAssunto(assunto) {
    if (assunto === "") {
      return "Escolha um assunto.";
    } else {
      return "";
    }
  }

  function validarMensagem(mensagem) {
    if (mensagem === "") {
      return "Escreva a sua mensagem.";
    } else if (mensagem.length < 10) {
      return "A mensagem precisa ter pelo menos 10 letras.";
    } else {
      return "";
    }
  }

  function mostrarAviso(texto, tipo) {
    aviso.textContent = texto
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
