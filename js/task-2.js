const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const creatE = ingredients.map(ingredient => {
  const item = document.createElement('li')
  item.textContent = ingredient;
  return item;
  });
  
const collection = document.querySelector('#ingredients');
collection.append(...creatE);
