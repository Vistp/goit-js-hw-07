const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    // console.log(event.currentTarget.value.length);
    // console.log(inputLength === event.currentTarget.value.length);

    if (inputLength === event.currentTarget.value.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}
