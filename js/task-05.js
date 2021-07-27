const inputEl = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.log(event.currentTarget.value);
    event.currentTarget.value ?
        nameLabel.textContent = event.currentTarget.value :
        nameLabel.textContent = 'незнакомец';
}