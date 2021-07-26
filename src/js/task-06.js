const inputEl = document.querySelector('#validation-input');

const inputLength = Number(inputEl.getAttribute('data-length'));
// через гетатрибут так как через точку inputEl.data-length не находит не срабатывавет


inputEl.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    // console.log('Потеря фокуса');
    console.log(event.currentTarget.value.length);
    console.log(inputLength);
    // console.log(inputLength === event.currentTarget.value.length);

    if (inputLength === event.currentTarget.value.length) {
        // console.log('длина совпадает');
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}
