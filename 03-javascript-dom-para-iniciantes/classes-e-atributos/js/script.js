const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

menu.className += 'Vermelho'
console.log(menu.className);

const animais = document.querySelector('.animais');
console.log(animais.attributes[1]);

const img = docmuent.querySelector('img');
console.log(img.getAttribute('src'));

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(img, possuiAtributo);
})


// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');

console.log(link);