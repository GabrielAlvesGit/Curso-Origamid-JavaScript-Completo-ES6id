function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement('button');
  return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');

function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement('button');
  return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');

>>>>>>> e23597be1d36b2adcf1b50eb17d1d76a2c3c668d
'blue');

console.log(blueButton);