function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const btnEl = document.querySelector(".change-color")
const bodyEl = document.querySelector("body")
const spanEl = document.querySelector(".color")
btnEl.addEventListener("click", onClick)
function onClick() {
  const color=getRandomHexColor()
  bodyEl.style.backgroundColor = color
  spanEl.textContent=color
}