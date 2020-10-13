const input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');


const currentValueOutput = (event) => {
    output.textContent =
      event.target.value === '' ? 'незнакомец' : event.target.value;
  };

  input.addEventListener('input', currentValueOutput);





/*Напиши скрипт который, при наборе текста 
в инпуте input#name-input (событие input),
подставляет его текущее значение в span#name-output.
 Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/



