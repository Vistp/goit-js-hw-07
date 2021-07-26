const counter = {
    value: 0,
    increment() {
        //console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        //console.log('decrement -> this', this);
        this.value -= 1;
    },
}

const valueEl = document.querySelector('#value');
const actions = document.querySelectorAll('button');
//console.log(actions[0]);

actions[0].addEventListener('click', function () {
    //console.log('кликнули на декремент');
    counter.decrement();
    console.log(counter.value);
    valueEl.textContent = counter.value;
})

actions[1].addEventListener('click', function () {
    //console.log('кликнули на инкремент');
    counter.increment();
    console.log(counter.value);
    valueEl.textContent = counter.value;
})