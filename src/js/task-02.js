const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector('#ingredients');
// создали ingredientsEl - получили доступ к HTML элементу с #ingredients


ingredients.forEach(element =>{
  const itemEl = document.createElement('li');

  itemEl.textContent = element;
  console.log(itemEl);
  ingredientsEl.appendChild(itemEl);
}
)
// перебрали массив ingredients - создали для каждого элемента лишку, добавили
// в нее текстовый контент из массива

// const elements = ingredients.map(element => {
//   const itemEl = document.createElement('li');

//   itemEl.textContent = element;
//   return itemEl;
// }
// )
// ingredientsEl.append(...elements);
// через мап решение

console.log(ingredientsEl);
console.log(ingredients);

// попробовать создать по одному элементу и добавить за один раз 
