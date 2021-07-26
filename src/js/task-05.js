const inputEl = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

// console.log(inputEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.log('Меняем инпут');
    // console.log(event.currentTarget.value);

    event.currentTarget.value ?
        nameLabel.textContent = event.currentTarget.value :
        nameLabel.textContent = 'незнакомец';
    
// без тернарника через иф, если не указать второе значение незнакомец -
    // то незнакомец отображается только при пустом инпуте при перезагрузке страницы
    // если начать вводить а потом стереть незнакомец не появляется. 

    // if (event.currentTarget.value) {
    //     nameLabel.textContent = event.currentTarget.value;
    // } else {
    //     nameLabel.textContent = 'незнакомец';
    // }
}