
const addBtn = document.querySelector('[data-action="render"]');
const clearBtn = document.querySelector('[data-action="destroy"]');
const createBox = document.querySelector('[type="number"]');
const boxes = document.querySelector('#boxes');

function createBoxes () {
    boxes.innerHTML = '';
    
    const amount = createBox.value;
    const items = [];

    for (let i = 0; i < amount; i += 1){
        const newItemDiv = document.createElement('div');
        newItemDiv.style.backgroundColor = randomColorRGB();
        newItemDiv.style.width = (i * 10) + 20 + 'px';
        newItemDiv.style.height = (i * 10) + 20 + 'px';
        items.push(newItemDiv);
    }
    boxes.after(... items);
};

const clearBoxes = () => {
    boxes.innerHTML = '';
    console.log(clearBtn);
};
  
addBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', clearBoxes);

function randomColorRGB() {
    const random = (min, max) => Math.round(Math.random() * (max - min) + min);

    const red = random(0, 255);
    const green = random(0, 255);
    const blue = random(0, 255);

    return `rgb(${red},${green},${blue})`;
};