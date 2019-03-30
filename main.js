    
const addButton = document.getElementById('addButton')
const inputIngredient = document.getElementById('inputIngredient');

const ingredients = [];
let ingredientCounter= 1;

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const deleteFunction = (e) => {
const buttonId = e.target.id;
ingredients.forEach((ingredient, index) => {
    if(ingredient.id === buttonId){
      ingredients.splice(index,1);    
  } 
})
 domStringBuilder(ingredients);
 addDeleteEvents();
};

const addDeleteEvents = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    for(let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteFunction);
    }
};

const domStringBuilder = (arrayToPrint) => { 
   let domString = ''; 
   arrayToPrint.forEach((ingredient) => {
       domString += ` <div class="card col-3">`
       domString += `  <div class="card-body">`;
       domString += `    <h5 class="card-title">${ingredient.item}</h5>`;
       domString += `    <a  class="btn btn-danger deleteButton" id=${ingredient.id}>Delete</a>`;
       domString += `  </div>`;
       domString += `</div>`;
     });


 printToDom('ingredient-container', domString);  
};

const addIngredients = (e) => {
    e.preventDefault();
    const inputText = inputIngredient.value;
    const newIngredient = {
        item: inputText, 
        id: `ingredient${ingredientCounter}`,
    };
    ingredients.push(newIngredient);
    ingredientCounter++;
    domStringBuilder(ingredients);
    addDeleteEvents();
    inputIngredient.value = '';
}

const eventListeners = () => {
    addButton.addEventListener('click', addIngredients);
};

const init = () => {
    eventListeners();
};

init();