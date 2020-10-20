console.log("app6");
const input = document.querySelector('#validation-input');

// input.addEventListener('input', onInputEnter);
// input.addEventListener('input', validInputEnter);
// input.addEventListener('input', invalidInputEnter);

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

// input.addEventListener('focus', makeCheckValidation);
input.addEventListener('input', makeCheckValidation)
console.log(makeCheckValidation);

