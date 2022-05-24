//NEEDS CODE-REVISION-//
//*****************NEEDS A WAY TO ADD INGREDIENTS of RECIPE to INGREDIENTS TABLE*****************//
// ----- ----- ----- ----- EXECUTED IN DASHBOARD TEMPLATE --------------------------------//

const addRecipeForm = document.getElementById("addRecipe-form");
const addIngredientForm = document.getElementById("addIngredient-form");
const ingredient_name = document.getElementById("add-ingredient");
const quantity = document.getElementById("add-quantity");
const unit = document.getElementById("add-unit");
const recipe_name = document.getElementById("add-recipe-name");
const recipe_description = document.getElementById("add-recipe-desc");
const recipe_img = document.getElementById("add-recipe-img");
const recipeList = document.getElementById("recipelist");
const addIngredientbtn = document.getElementById("addIngredientbtn");
const submitRecipebtn = document.getElementById("submitRecipebtn");
const ingredientData = [];

async function newRecipeHandler(event) {
    event.preventDefault();
    const recipeDataFromUser = {
        recipeName: recipe_name.value,
        recipeDesc: recipe_description.value,
        recipeimg: recipe_img.value,
        ingredients: ingredientData,
    };
    const newRecipe = await fetch("/addrecipes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeDataFromUser),
    });
    console.log(":(");
    document.location.replace("/");
}

addIngredientbtn.addEventListener("click", function(event) {
    event.preventDefault();
    const ingredientName = ingredient_name.value;
    const quantityI = quantity.value;
    const unitI = unit.value;
    recipeList.textContent += "\n" + ingredientName + "\n" + quantityI + "\n" + unitI + " || ";

    ingredientData.push({ ingredient_name: ingredientName, quantity: quantityI, unit: unitI });
    ingredient_name.value = "";
    quantity.value = "";
    unit.value = "";
});

submitRecipebtn.addEventListener("click", newRecipeHandler);