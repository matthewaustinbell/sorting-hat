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
   const houseSelector = Math.floor((Math.random()*4)+1);
    if (houseSelector == 1){ domString +='Griffindoor'};
    if (houseSelector == 2){ domString +='Hufflepuff'};
    if (houseSelector == 3){ domString +='Slitherin'};
    if (houseSelector == 4){ domString +='Ravinclaw'};
    /// based on number define house string 
   arrayToPrint.forEach((ingredient) => {
       domString += ` <div class="card col-3">`
       domString += `  <div class="card-body">`;
       domString += `    <h5 class="card-title">${ingredient.item}</h5>`;
       domString += `    <a  class="btn btn-danger deleteButton" id=${ingredient.id}>Expel</a>`;
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