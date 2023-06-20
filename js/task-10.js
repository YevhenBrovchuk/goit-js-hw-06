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
btnDestroyEl.addEventListener("click", onClickDestroy)


function onClickCreate() {
  createBoxes(Number(inputEl.value))
  
}

function onClickDestroy() {
  if (divEl.children.length > 0) {
    // [...divEl.children].forEach(item=>item.remove())
    divEl.innerHTML(" ");
  }
 
}

function createBoxes(amount) {
  onClickDestroy()
  const arrdiv = []
  let qwe=0
  for (let i = 0; i < amount; i += 1){
    arrdiv.push(`<div ${style.width = 30 + qwe} + px ${ style.height = 30 + qwe} + px ${style.background = getRandomHexColor()}></div>`)
  qwe += 10;
  }
  divEl.insertAdjacentHTML('beforeend', arrdiv.join(""))
//  const divList=[...divEl.children]
// let qwe=0
  // divList.forEach(item => {
  //   item.style.width = 30 + qwe + 'px'
  //   item.style.height = 30 + qwe + 'px'
  //   item.style.background = `${getRandomHexColor()}`
  //   qwe += 10;
  // })
  inputEl.value = "";
}


