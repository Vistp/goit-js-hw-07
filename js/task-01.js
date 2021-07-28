const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);

const itemTitleEl = document.querySelectorAll('h2');

const itemListEl = document.querySelectorAll('.item > ul');

itemTitleEl.forEach((element,index) => {
    console.log(`Категория: ${element.textContent}`),
    console.log(`Количество элементов: ${itemListEl[index].children.length}`)
}
)


