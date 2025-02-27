const cpfs = document.querySelectorAll('.cpfs li');

// const arrayCpfs = [...cpfs];

// console.log(arrayCpfs);

function elementInnerText([...elements]) {
  //const arrayElements =  Array.from(elements);
  return elements.map(element => {
    return element.innerText;
  });
}

// Limpar um CPF e construir
const limparCPF = (cpfs) => {
  return cpfs.replace(/\D/g, '');
}

const construirCPF = (cpfs) => {
  return cpfs.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, 'S1.$2.$3-$4');
}

const formatarCPFS = (cpfs) => {
  return cpfs.map(cpf => {
    return cpfs.map(limparCPF).map(construirCPF);
  });
};

console.log(limparCPF('122.222.222 2222'));
console.log(construirCPF('22222222222'));

const resultado = (elementInnerText(cpfs));

console.log(formatarCPFS(resultado));

