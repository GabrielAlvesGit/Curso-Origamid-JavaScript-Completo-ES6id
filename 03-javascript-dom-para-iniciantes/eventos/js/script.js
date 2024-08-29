const img = document.querySelector('img');

function callback(event) {
  console.log('clicou');
}

img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
}

animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  //console.log(event);
  console.log(this);
  console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

console.log(animaisLista);


const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
h1.addEventListener('mousemove', handleEvent);

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
  if (event.key === 'f') {
    document.body.classList.toggle('fullscreen');
  }

}

window.addEventListener('keydown', handleKeyboard);


const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.target.getAttribute('src'));
}
imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});

// Exercício
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const TodosElementos = document.querySelectorAll('*');

function handleElemento(event) {
  event.currentTarget.remove();
}

//TodosElementos.forEach((elemento) => {
//elemento.addEventListener('click', handleElemento);
//});

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClick(event) {
  console.log(event.key);
  if (event.key == 't') {
    console.log('Clicou t');
  }
};

window.addEventListener('keydown', handleClick);