// NEEDS CODE/NEEDS REVISION

async function deleteRecipe(id) {
    const response = await fetch(`/api/recipes/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
    
    recipes.forEach((recipe) => {
      recipe.addEventListener('click', () => {
        deleteRecipe(recipe.dataset.recipeId);
      });
    });