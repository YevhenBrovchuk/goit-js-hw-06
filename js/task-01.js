//--------------Task 1-------------------
const qqq = document.querySelectorAll('.item')
console.log(`Number of categories: ${qqq.length}`);
[...qqq].forEach(item=>console.log(`Category: ${item.firstElementChild.textContent} \n Elements: ${item.lastElementChild.children.length}`))


