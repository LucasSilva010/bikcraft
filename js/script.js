// Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro)
  if(elemento) {
    elemento.checked = true
  }
  console.log(elemento)
}

parametros.forEach(ativarProduto)


// Perguntas Frequentes

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(ev) {
  const pergunta = ev.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)

  resposta.classList.toggle('ativa')
  const ativa = resposta.classList.contains('ativa')
  pergunta.setAttribute('aria-expanded', ativa)
  console.log(resposta)
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta)
}

if(perguntas){
  perguntas.forEach(eventosPerguntas)
}

console.log(perguntas)
