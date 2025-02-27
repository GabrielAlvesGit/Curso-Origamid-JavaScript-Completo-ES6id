// const frase = 'JavaScript, TypeScript, CoffeeScript, Java';

// const regexp = '';

// const resultados = frase.split(regexp);

// console.log(resultados);


const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp = /(?<=<\/?)\w+/g;

const resultado = tags.replace(regexp, 'div')
console.log(resultado);


// Fazendo para Email


const emails = `
empresa@gmail.com
empresa@gmail.com
empresa@gmail.com
`;

const regexpEmails = /\w+@[\w.]+/g;

const resultadoEmails = emails.replace(regexpEmails, function (...args) {
  console.log(args);
  return '$1X'
});
console.log(resultadoEmails);