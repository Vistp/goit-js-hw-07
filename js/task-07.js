const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);

function getFontSize(size, count) {
    return `${parseInt(size) + count}px`;
}

function onInputChange() {
    for (let i = 0; i <= inputEl.value; i += 1) {
        textEl.style.fontSize = getFontSize('5px',i);
    } 
}
    