//NEEDS CODE-REVISION-//
//*****************NEEDS A WAY TO ADD INGREDIENTS of RECIPE to INGREDIENTS TABLE*****************//
// ----- ----- ----- ----- EXECUTED IN DASHBOARD TEMPLATE --------------------------------//

const addRecipeForm = document.getElementById('addRecipe-form');

async function newRecipeHandler(event) {
  event.preventDefault();

  // Gets values from form fields
  const recipe_name = document.getElementById('add-recipe-name').value;
  const recipe_description = document.getElementById('add-post-desc').value;

  // Fetches using values then inserts data into body (to be extracted in the route (EXAMPLE: req.body.recipe_title) )
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      recipe_name,
      recipe_description,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // IF response = OK refresh page. 
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    // Log/Alert error
    alert(response.statusText);
  }
}

// Add the event handler for the form submission
addRecipeForm.addEventListener('submit', newRecipeHandler);