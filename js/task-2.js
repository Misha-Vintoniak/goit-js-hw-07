
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
const collection = document.querySelector('#ingredients');

const makeElement = array => {
  return array.map(arr => {
    const item = document.createElement('li');
    item.textContent = arr;

    return item;
  });
};

const elements = makeElement(ingredients);
collection.append(...elements);
/*
Напиши скрипт, який для кожного елемента масиву
ingredients створить окремий li, 
після чого вставить всі li за одну операцію 
в список ul.ingredients. 
Для створення DOM-вузлів використовуй 
document.createElement().
*/