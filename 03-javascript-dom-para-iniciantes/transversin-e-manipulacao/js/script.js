const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

faq.appendChild(cloneH1);

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);;

// Selecione o primeiro DT da dl de Faq
const primeiroDt = faq.querySelector('dt');

console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais
