
const input = document.querySelector('#validation-input');

const makeCheckValidation = event => {
    if (event.target.value.length === Number(input.dataset.length)) {
        input.classList.remove('validation-input', 'invalid');
        input.classList.add('valid');
    } else if (event.target.value.length === 0) {
        input.classList.remove('invalid');
        input.classList.add('validation-input');    
    } else {
        input.classList.remove('valid', 'validation-input');
        input.classList.add('invalid');
    };
};

input.addEventListener('blur', makeCheckValidation)
console.log(makeCheckValidation);

