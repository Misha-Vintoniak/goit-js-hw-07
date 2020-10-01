
const categories = document.querySelector('#categories');

const itemElem = categories.querySelectorAll('.item');

console.log(`В списку ${categories.children.length} категорії`);

itemElem.forEach(item => {
  console.log(`Категорія: ${item.firstElementChild.textContent}`);
  console.log(`Кількість елементів: ${item.querySelector('ul').children.length}`);
});