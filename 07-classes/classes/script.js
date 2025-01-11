function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement('button');
  return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');

console.log(blueButton);