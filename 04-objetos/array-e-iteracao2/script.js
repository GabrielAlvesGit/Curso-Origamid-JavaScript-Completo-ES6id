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

var acumulador = {};


const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
});

const frutas = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => {
  console.log(item);
  return item === 'Uva';
});
console.log(temUva);

const every = frutas.every((fruta) => {
  return fruta;
});

console.log(every);


const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every(n => n > 3);

console.log(maiorQue3);

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas1.filter((item) => {
  console.log(item);
});

console.log(arrayFrutas);

const maiores15 = aulas.filter((aula) => {
  console.log(aula.min);
  return aula.min > 15;
});

console.log(maiores15);


// Execício

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const curso = document.querySelectorAll('.curso');
const arrayCursos = Array.from(curso);

const objetoCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aula = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aula,
    horas
  }
});

console.log(curso);

// Retorne uma lista com os
// números maiores que 100
const numeros10 = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros10.filter(n => n > 100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item) => {
  return item === 'Baixo';
})

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]


const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
  return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);