<<<<<<< HEAD
class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }

  acelerar() {
    console.log('Acelerando...');
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar();
    console.log('Acelerando Rápido');
  }
  empinar() {
    console.log('Moto Empinando com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2, true);
const civic = new Veiculo(2);
=======
class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }

  acelerar() {
    console.log('Acelerando...');
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar();
    console.log('Acelerando Rápido');
  }
  empinar() {
    console.log('Moto Empinando com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2, true);
const civic = new Veiculo(2);
>>>>>>> e23597be1d36b2adcf1b50eb17d1d76a2c3c668d
