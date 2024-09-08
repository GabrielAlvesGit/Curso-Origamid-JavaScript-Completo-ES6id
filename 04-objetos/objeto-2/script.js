// const pessoa = new Object({
//   nome: 'Andre'
// });

// console.log(pessoa);

// const carro = {
//   marca: 'Marca',
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' Buzinou';
//   }
// }

// const honda = Object.create(carro).init('Honda');
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel);

// console.log(moto);

const moto = {
  capacete: true,
}

Object.defineProperties(moto, {
  rodas: {
    enumerable: true,
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4 + ' Total Rodas';
    },
  }
});

console.log(moto);


const frutas = ['Banana', 'Uva'];
const frase = 'Oi frase';
const somar = function (a, b) {
  return a + b;
};

const carro = {
  marca: 'Ford',
}

console.log(frutas.toString());

console.log(Object.prototype.toString.call(frase));

// Exercício

// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(verificarDado({}));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
});
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));