const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});


const li = document.querySelectorAll('li');

li.forEach((item, index) => { item.classList.add('active' + index) });

const carros2 = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map((item, index, array) => {
  return item.toUpperCase();
});

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map(n => n * 2);

console.log(numerosX2);

console.log(novaArray);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);

const arrayNomeAulas = aulas.map(function nomeAula(aula) {
  return aula.nome;
});

console.log(arrayNomeAulas);
console.log(tempoAulas);

const aulas2 = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return acumulador + item;
}, 0);

console.log(reduceAulas);

const numerosIII = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numerosIII.reduce((anterior, atual) => {
  if (anterior > atual)
    return anterior
  else
    return atual;
});

console.log(maiorNumero);