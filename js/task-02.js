const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const itemEl = document.createElement('li');

  itemEl.textContent = element;
  return itemEl;
}
)
ingredientsEl.append(...elements);

// console.log(ingredientsEl);
// console.log(ingredients);

