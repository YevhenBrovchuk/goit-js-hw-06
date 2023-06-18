function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector('input ')
const btnCreateEl = document.querySelector("[data-create]")
const btnDestroyEl = document.querySelector('[data-destroy]')
const divEl=document.querySelector("#boxes")

btnCreateEl.addEventListener("click", onClickCreate)
// btnDestroyEl.querySelector("click", onClickDestroy)


function onClickCreate() {
  createBoxes(Number(inputEl.value))
  
}





function createBoxes(amount) {
  const arrdiv = []
  let qwe=0
  for (let i = 0; i < amount; i += 1){
    arrdiv.push(`<div></div>`)
  }




  divEl.insertAdjacentHTML('beforeend', arrdiv.join(""))

console.dir(divEl.children);


  // divEl.children.style.width = 30;
  // divEl.children.style.background = "black"
  
}