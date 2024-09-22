export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  console.log(horarioSemana);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const teste = [1, 2, 3, 4, 5].indexOf(6);
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  };
}




// const agora = new Date();
// const futuro = new Date('Dec 31 2024 23:59');

// console.log(agora.getMonth());

// console.log(futuro);

// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// console.log(transformarDias(agora.getTime()));
// console.log(futuro.getTime());

// const diaAgora = transformarDias(agora.getTime());
// const diaFuturos = transformarDias(futuro.getTime());

// console.log(diaFuturos - diaAgora);