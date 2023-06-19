const btnDecrementEl = document.querySelector('button[data-action="decrement"]')
const btnIncrementEl=document.querySelector('button[data-action="increment"]')
const inputEl = document.querySelector("#value")


let counterValue = 0;

console.log(inputEl.textContent);


btnDecrementEl.addEventListener('click', onClickDec)
btnIncrementEl.addEventListener('click', onClickInc)


function onClickDec() {
    counterValue -= 1;
    qwerty()
}

function onClickInc(){
    counterValue += 1;
    qwerty()
}

function qwerty(){
    inputEl.textContent = counterValue
}