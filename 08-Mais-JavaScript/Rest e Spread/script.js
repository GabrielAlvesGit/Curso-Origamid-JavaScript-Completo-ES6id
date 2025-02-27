document.addEventListener('DOMContentLoaded', () => {
    function perimetroForm(lado, totalLados = 4) {
      const argArray = Array.from(arguments);
      console.log(argArray);
      return lado * totalLados;
    }  
    perimetroForm();

    // primeiroForm(10, 4);
    // primeiroForm(10);

    // console.log(primeiroForm(10, 4));
});