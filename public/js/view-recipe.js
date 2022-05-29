const viewrecipeEl = document.getElementById('view-recipe')

async function newSearchHandler(event) {
    event.preventDefault();
    document.location.replace("/" + "viewrecipes/" + viewrecipeEl.value);
}
submitSearchbtn.addEventListener("click", newSearchHandler);