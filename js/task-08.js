
const formEl = document.querySelector(".login-form")
let info={}
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(ev) {
    ev.preventDefault();
    const {
        elements: { email, password }
    } = ev.currentTarget;
if (email.value === "" || password.value === "") {
    return alert ("Please fill in all the fields!");
  }
    info.email = email.value;
    info.password = password.value;
   formEl.reset();
    
}
