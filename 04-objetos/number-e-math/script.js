Number.isNaN('ds');
Number.isNaN(10);

console.log(parseFloat('3333.333'));
console.log(parseFloat('100 reais'));
console.log(parseInt('100.45 reais'));
console.log(parseInt('100'));

const preso = 10.3232;
console.log(preso.toFixed() + 322);

let valor = 48.49;
valor = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
console.log(valor);

const aleatorio = Math.floor(Math.random() * 10);
console.log(aleatorio);

//Math.floor(Math.random() * (max - min + 1)) + min;

// Exercício
// Retorne um número aleatório
// entre 1050 e 2000
const aletorio2 = Math.floor(Math.random() * (200 - 1050) + 1050);

console.log(aletorio2);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
  'R$ 230  ', 'r$  200'];

function limparPreco(preso) {
  preso = +preso.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preso = preso.toFixed(2);
  console.log(preso);
  return preso;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});

limparPreco(listaPrecos[0]);