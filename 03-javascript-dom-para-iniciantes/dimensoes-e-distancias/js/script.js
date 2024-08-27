const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

console.log(h2left);

const h2react = primeiroh2.getBoundingClientRect();

console.log(h2react.top);

if (h2react.top < 0) {
  console.log('Passou do elemento');
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px)');
if (small) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
}


console.log(small);

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagem() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagens) => {
    soma = soma + imagens.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  somaImagem();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linksWidth = link.offsetWidth;
  const linksHeight = link.offsetHeight;

  if (linksWidth >= 48 && linksHeight >= 48) {
    console.log('Possui boa acessibilidade');
  } else {
    console.log('Não possui boa acessibilidade');
  }
});

console.log(links);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 768px)').matches;

