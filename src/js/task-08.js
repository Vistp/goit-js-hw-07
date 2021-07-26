const renderBtn = document.querySelector('button[data-action="render"]');
// console.log(renderBtn);

const destroyBtn = document.querySelector('button[data-action="destroy"]');
// console.log(destroyBtn);

const valueEl = document.querySelector('input[type="number"]');
// console.log(valueEl);
console.log(valueEl.value);

const boxesEl = document.querySelector('#boxes');
console.log(boxesEl);

// при клике на рендер создаем див

function getRandomColor(min, max){
  return Math.ceil(Math.random() * (max - min) + min)
}
function getWidth(width, count) {
    console.log(count);
    return `${parseInt(width) + count*10}px`;
}
function getHeight(height, count) {
    return `${parseInt(height) + count*10}px`;
}

const createBoxes = (amount) => {
    amount = valueEl.value - 1;
    // console.log(amount);
    // console.log(`создаем див ${valueEl.value}`);
    for (let i = 0; i <= amount; i += 1) {
        // if (amount > 0) {
    
            const itemEl = document.createElement('div');
            itemEl.classList.add('item');
            itemEl.style.backgroundColor = `rgb(${getRandomColor(0, 255)}, ${getRandomColor(0, 255)}, ${getRandomColor(0, 255)})`;
            if (i === 0) {
                itemEl.style.width = '30px';
            itemEl.style.height = '30px';
            } else {
                itemEl.style.width = getWidth('30px',i);
            itemEl.style.height = getHeight('30px',i);
                
            }

            // console.log(itemEl);
            boxesEl.appendChild(itemEl);
        // }
    }
}

renderBtn.addEventListener('click', createBoxes);


// Очистка контейнера boxes по клику на кнопку
const destroyBoxes = () => {
    console.log('удаляем все созданные дивы');
    boxesEl.innerHTML = '';
}
destroyBtn.addEventListener('click', destroyBoxes);