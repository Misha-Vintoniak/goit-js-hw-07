const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', renameSpan);

function renameSpan (event) {
    if (event.currentTarget.value !== ``){
        span.textContent = (event.currentTarget.value);
    }   else {
        span.textContent = 'незнайомець';
    };    
};
