const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);

const itemTitleEl = document.querySelectorAll('h2');

const animalsEl = document.querySelectorAll('.item__animals>li');
const productsEl = document.querySelectorAll('.item__products>li');
const technologyEl = document.querySelectorAll('.item__technology>li');

const itemElements = [animalsEl, productsEl, technologyEl];

itemTitleEl.forEach((element,index) => {
    console.log(`Категория: ${element.textContent}`),
    console.log(`Количество элементов: ${itemElements[index].length}`)
}
)


