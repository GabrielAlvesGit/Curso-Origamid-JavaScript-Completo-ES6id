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

