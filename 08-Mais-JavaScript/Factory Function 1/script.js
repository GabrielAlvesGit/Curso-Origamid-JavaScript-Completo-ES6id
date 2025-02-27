document.addEventListener('DOMContentLoaded', () => {
    function createButton(text){
      const numeroSecreto = 'j3kl32j99823j0';
      
      function element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
      };

      return{
        text: text,
        element: element
      }
    }

    const btnBlue = createButton('Comprar');
    console.log(btnBlue);
});