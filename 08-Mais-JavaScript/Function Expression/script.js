document.addEventListener('DOMContentLoaded', () => {
    // function somar(a, b) {
    //   return a + b;
    // }

    // const somar = function(a,  b){
    //   return a + b;
    // }

    const instrumento = 'Guitarra';

    function initCodigo() {
      const instrumento = 'Guitarra'
      console.log(instrumento);
    }

    initCodigo();

    const somar = (a, b) => a + b;

    console.log(somar(4,5));
});