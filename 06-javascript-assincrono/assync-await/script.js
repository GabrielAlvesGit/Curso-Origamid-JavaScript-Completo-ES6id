async function puxarDados() {
  const responseDados = fetch('./dados.json');
  const responseCliente = fetch('./clientes.json');

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseCliente).json();

  console.log(jsonDados);
  console.log(jsonClientes);
};

puxarDados();


async function asyncSemPromise() {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('Depois de 1s');
      resolve();
    }, 1000);
  })

  console.log('Acabou');
}

asyncSemPromise();