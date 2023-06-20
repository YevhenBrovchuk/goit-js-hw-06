const inputEl = document.querySelector('#name-input')

const spanEl = document.querySelector("#name-output")

inputEl.addEventListener('input', onInput)

function onInput() {
    
    spanEl.textContent = inputEl.value;
    if (!inputEl.value.trim()) {
        spanEl.textContent="Anonymous"
    }
}
