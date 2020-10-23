
const inputSlide = document.querySelector('#font-size-control');
const slideChangeText = document.querySelector('#text');

const makeChangeText = event => {
slideChangeText.style.fontSize = event.target.value + "px";
};

inputSlide.addEventListener('input', makeChangeText);
 