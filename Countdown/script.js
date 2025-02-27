import Countdown from './countdown.js';

const tempoParaONatal = new Countdown('25 December 2025 17:44:00 GMT-0300');
const tempoParaOAnoNovo = new Countdown('31 December 2025 17:44:00 GMT-0300');

console.log(tempoParaONatal.total);

setInterval(() => {
  console.log(tempoParaOAnoNovo.total);
});