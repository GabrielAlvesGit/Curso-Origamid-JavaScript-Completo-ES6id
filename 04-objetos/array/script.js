const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const preço = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', { cor: 'Azul', preso: 200 }],
function andar(nome) { console.log(nome) }];

const carros = new Array('Ford', 'Fiat', 'Honda');
carros[2] = 'Ferrari';

console.log(carros.length);

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li);

const objeto = {
  0: 'Andre',
  1: 'Rafael',
  2: 'Teste',
  3: 'Teste2',
  length: 4,
}

const objetoArray = Array.from(objeto);

console.log(li);
console.log(arrayLi);

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas.length);

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos2.sort();

const idades = [32, 21, 33, 43, 1, 12, 8];

console.log(instrumentos);
console.log(idades);

const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift();
carros2;

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);


// Execício

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();
comidas.push('Arroz');
comidas.push('Peixe', 'Batata');

console.log(comidas);
console.log(primeiroValor);
console.log(ultimoValor);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort();
estudantes.reverse();
console.log(estudantes);
console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section');
html = html.join('ul');
console.log(html);

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

carros3.pop();
console.log(carros3);