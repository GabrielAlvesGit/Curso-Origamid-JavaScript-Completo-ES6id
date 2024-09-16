// const cep = fetch('https://viacep.com.br/ws/04851513/json');

// cep
//   .then(r => r.json())
//   .then((body) => {
//     console.log(body.bairro);
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body.logradouro;
//   });

const sobre = fetch('./sobre.html');
const div = document.createElement('div');

sobre
  .then(r => r.text())
  .then((body) => {
    console.log(body);
    div.innerHTML = body;
  });