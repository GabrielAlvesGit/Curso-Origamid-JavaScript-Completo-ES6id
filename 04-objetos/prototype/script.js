function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return 'Abraçou';
  }
  this.andar = function () {
    return 'Andou pelo objeto';
  }
};

Pessoa.prototype.andar = function () {
  return this.nome + ' Pessoa andou';
}

const andre = new Pessoa('Andre', 28);

console.log(Pessoa.prototype);