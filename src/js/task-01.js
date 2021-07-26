// решение через функции

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

// длинно плохо но работает!!!

// const categoriesEl = document.querySelectorAll('.item');
// console.log(categoriesEl);
// console.log(`В списке ${categoriesEl.length} категории.`);


// const itemTitleEl = document.querySelectorAll('h2');

// const animalsEl = document.querySelectorAll('.item__animals>li');
//console.log(animalsEl);

// console.log(`Категория: ${itemTitleEl[0].textContent}`);
// console.log(`Количество элементов: ${animalsEl.length}`);
// console.log('*** *** ***');

// const productsEl = document.querySelectorAll('.item__products>li');
//console.log(productsEl);

// console.log(`Категория: ${itemTitleEl[1].textContent}`);
// console.log(`Количество элементов: ${productsEl.length}`);
// console.log('*** *** ***');


// const technologyEl = document.querySelectorAll('.item__technology>li');
//console.log(technologyEl);

// console.log(`Категория: ${itemTitleEl[2].textContent}`);
// console.log(`Количество элементов: ${technologyEl.length}`);
// console.log('*** *** ***');

