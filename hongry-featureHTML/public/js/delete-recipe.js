// NEEDS CODE/NEEDS REVISION

const recipedelbtn = document.getElementById('recipedelbtn');


async function deleteRecipe(id) {
    const response = await fetch(`/viewrecipes/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
}

recipes.forEach((recipe) => {
    recipedelbtn.addEventListener('click', () => {
        deleteRecipe(recipe.dataset.recipeId);
    });
});