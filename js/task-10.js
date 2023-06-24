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
    divEl.innerHTML="";
}

function createBoxes(amount) {
  onClickDestroy()
  const arrdiv = []
  let size=30
  for (let i = 0; i < amount; i += 1){
    // додавання стилів та висоти  та іншого в дів
    // const markup = `<div style="width:${size}px; height:${size}px;"></div>`;



    const div = document.createElement("div")
    div.style.width = `${size}px`
    div.style.height=`${size}px`
    div.style.background = getRandomHexColor()
    arrdiv.push(div)
    console.log(arrdiv);
  size += 10;
  }
  divEl.append(...arrdiv)

  inputEl.value = "";
}


