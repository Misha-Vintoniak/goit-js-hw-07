
const inputSlide = document.querySelector('#font-size-control');
const slideChangeText = document.querySelector('#text');

const makeChangeText = event => {
slideChangeText.style.fontSize = event.target.value + "px";
console.log((slideChangeText).scrollHeight);
};

inputSlide.addEventListener('input', makeChangeText);
 