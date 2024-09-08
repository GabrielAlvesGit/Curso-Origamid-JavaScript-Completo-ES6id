const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n3;
}

console.log(somar.name);

function darOi(nome, idade) {
  console.log('oi para você ' + nome + idade);
}

darOi.call({}, 'Gabriel', 24);

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro();

const carros = ['Ford', 'Fiat', 'VW'];

// carros.forEach.call((carro) => {
//   console.log(carro);
// });

function Dom(selector) {
  this.element = document.querySelector(selector);
}

Dom.prototype.ativo = function (classe) {
  //this.element.classeList.add(classe);
};

const ul = new Dom('ul');

const li = {
  element: document.querySelector('li'),
}

Dom.prototype.ativo();

ul.ativo('ativar');

console.log(ul);

const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas);