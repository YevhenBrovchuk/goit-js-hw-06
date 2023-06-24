const inputEl = document.querySelector('[data-length="6"]')

inputEl.addEventListener("blur", onBlur)
function onBlur() {
    
    if (inputEl.value.trim().length === Number(inputEl.dataset.length)) {
        addRemove("valid","invalid")
    }
    else {
        addRemove("invalid","valid")
    }
}


function addRemove(a,b) {
    
    inputEl.classList.add(a)
    inputEl.classList.remove(b)
}