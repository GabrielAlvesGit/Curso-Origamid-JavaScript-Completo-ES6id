const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');
//console.log(gridSectionHtml);
//console.log(gridSectionNode);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

//const arrayGrid = array.from(gridSectionHtml);


// Retorne no console todas as imagens do site
const todasImg = document.querySelectorAll('img');
console.log(todasImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelectorAll('.animais-descricao h2');
console.log(h2Animais);


// Selecione o último p do site (Ideia para usar no Wordpress)
const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[--paragrafos.length]);

