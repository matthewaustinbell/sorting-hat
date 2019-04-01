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

const houseSelector = () => {
let randomNumber = Math.floor((Math.random()*4)+1);
let houseType = '';
    if (randomNumber == 1){ houseType ='Griffindoor'};
    if (randomNumber == 2){ houseType ='Hufflepuff'};
    if (randomNumber == 3){ houseType ='Slitherin'};
    if (randomNumber == 4){ houseType ='Ravinclaw'};

  return houseType; 
};

const domStringBuilder = (arrayToPrint) => { 
   let domString = ''; 
    /// based on number define house string 
   arrayToPrint.forEach((ingredient) => {
       domString += ` <div class="card col-3">`
       domString += `  <div class="card-body">`;
       domString += `    <h5 class="card-title">${ingredient.item}</h5>`;
       domString += `    <h5 class="card-title">${ingredient.house}</h5>`;
       domString += `    <a  class="btn btn-danger deleteButton" id=${ingredient.id}>Expel</a>`;
       domString += `  </div>`;
       domString += `</div>`;
     });


 printToDom('ingredient-container', domString);  
};

const addIngredients = (e) => {
    e.preventDefault();
    const inputText = inputIngredient.value;
    const studentHouse = houseSelector();
    const newIngredient = {
        item: inputText, 
        id: `ingredient${ingredientCounter}`,
        house: studentHouse, 
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