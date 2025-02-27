const button = {
  get tamanho() {
    return this._numero;
  },
  set tamanho(numero) {
    thi._numero = numero;
  }
}

const frutas = {
  listas: [],
  set nova(fruta) {
    this.listas.push(fruta);
  }
}

frutas.nova = 'Banana';
frutas.nova = 'Morango';


class Button {
  constructor (text, color){
      this.text = text;
      this.color = color;
  }
  get element(){
    const type = this._elementType || 'button';
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set elementType(type){
    this._elementType = type;
  }
}

const blueButton = new Button('Comprar', 'blue');