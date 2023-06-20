const inputEl = document.querySelector('[data-length="6"]')

inputEl.addEventListener("blur", onBlur)
function onBlur() {
    
    if (inputEl.value.trim().length === Number(inputEl.dataset.length)) {
        AddRemove("valid","invalid")
    }
    else {
        AddRemove("invalid","valid")
    }
}


function AddRemove(a,b) {
    
    inputEl.classList.add(a)
    inputEl.classList.remove(b)
}