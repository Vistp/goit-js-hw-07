const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value = 0;
    },
}

const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const valueEl = document.querySelector('input[type="number"]');
const boxesEl = document.querySelector('#boxes');

// функции для подсчета количества созданных дивов
let total = 0;
const countTotal = (amount) => {
    amount = valueEl.value;
    console.log(amount);
    for (let i = 0; i < amount; i += 1) {
        total += 1;
        console.log('Это тотал из функции счетчика', total);
    }
    return total;
}
const resertTotal = () => {
    console.log('обнуляем тотал');
    return total = 0;
}

// при клике на рендер создаем див, задаем рандомный цвет изменение размеров

function getRandomColor(min, max){
  return Math.ceil(Math.random() * (max - min) + min)
}
function getWidth(width, count) {
    return `${parseInt(width) + count*10}px`;
}
function getHeight(height, count) {
    return `${parseInt(height) + count*10}px`;
}

const createBoxes = (amount) => {
    amount = valueEl.value;
    for (let i = 0; i < amount; i += 1) {
        
        const itemEl = document.createElement('div');
        itemEl.classList.add('item');
        itemEl.style.backgroundColor = `rgb(${getRandomColor(0, 255)}, ${getRandomColor(0, 255)}, ${getRandomColor(0, 255)})`;
        if (i === 0 && counter.value === 0) {
            itemEl.style.width = '30px';
            itemEl.style.height = '30px'; 
        } else if (counter.value > 0) {
            itemEl.style.width = getWidth('30px', i+total);
            itemEl.style.height = getHeight('30px', i+total);
        } else {
            itemEl.style.width = getWidth('30px', i);
            itemEl.style.height = getHeight('30px', i);
        }
         boxesEl.appendChild(itemEl);
    }
}

renderBtn.addEventListener('click', createBoxes);
renderBtn.addEventListener('click', countTotal);
renderBtn.addEventListener('click', function () {
    if (valueEl.value > 0) {
        counter.increment();
        console.log('это количество кликов на кнопку:', counter.value);
    }
});

    // Очистка контейнера boxes по клику на кнопку

const destroyBoxes = () => {
        console.log('удаляем все созданные дивы');
        boxesEl.innerHTML = '';
    }
destroyBtn.addEventListener('click', destroyBoxes);
destroyBtn.addEventListener('click', function () {
    counter.decrement();
    console.log('обнуляем количество кликов');
});
destroyBtn.addEventListener('click', resertTotal);