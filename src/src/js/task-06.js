const inputEl = document.querySelector('[data-length="6"]')

inputEl.addEventListener("blur", onBlur)
function onBlur() {
    
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove("invalid")
        inputEl.classList.add("valid")
    }
    else {
        inputEl.classList.remove("valid")
        inputEl.classList.add("invalid")
    }

    
    
}