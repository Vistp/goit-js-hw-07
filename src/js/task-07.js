const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
//const body = document.querySelector('body');
//textEl.style.color = 'red';


inputEl.addEventListener('input', onInputChange);


function onInputChange() {
    console.log('Двигаем ползунок');
    console.log(inputEl.value);
    
    if (inputEl.value <= 15) {
        textEl.style.fontSize = 'xx-small';
    }
    if (inputEl.value > 15) {
        textEl.style.fontSize = 'x-small';
    }
    if (inputEl.value > 30) {
        textEl.style.fontSize = 'small';
    }
    if (inputEl.value > 40) {
        textEl.style.fontSize = 'smaller';
    }
    if (inputEl.value > 50) {
        textEl.style.fontSize = 'large';
    }
    if (inputEl.value > 60) {
        textEl.style.fontSize = 'larger';
    }
    if (inputEl.value > 70) {
        textEl.style.fontSize = 'x-large';
    }
    if (inputEl.value > 80) {
        textEl.style.fontSize = 'xx-large';
    }
    if (inputEl.value > 90) {
        textEl.style.fontSize = 'xxx-large';
    }
}