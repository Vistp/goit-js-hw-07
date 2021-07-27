const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
}

const valueEl = document.querySelector('#value');
const actions = document.querySelectorAll('button');

actions[0].addEventListener('click', function () {
    //console.log('кликнули на декремент');
    counter.decrement();
    valueEl.textContent = counter.value;
})

actions[1].addEventListener('click', function () {
    //console.log('кликнули на инкремент');
    counter.increment();
    valueEl.textContent = counter.value;
})