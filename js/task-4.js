const counterElement = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action = decrement]')
const btnIncrement = document.querySelector('[data-action = increment]')

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    counterElement.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    counterElement.textContent = counterValue;
};

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

