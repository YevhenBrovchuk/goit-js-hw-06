const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = ingredients.map(item=>
{
  const li = document.createElement("li")
li.classList.add('item')
  li.textContent = item
  return li;
})

const list = document.querySelector("#ingredients")

list.append(...listIngredients);
console.log(list);

