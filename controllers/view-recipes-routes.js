const withAuth = require('../utils/auth')
const Recipe = require('../models/Recipe');
const User = require('../models/User');
const RecipeIngredient = require('../models/RecipeIngredient');

const router = require('express').Router();

//Get all recipes and render via View-Recipe.handlebars
// router.get('/', (req, res, next) => {
//     res.render('View-Recipes');
//     next();
// });

router.get('/', async(req, res) => {
    try {
        console.log("THIS GET ROUTE RAN")
        const dbRecipeData = await Recipe.findAll({
            include: [{ model: RecipeIngredient }]
        });
        // res.status(200).json(dbRecipeData)
        console.log("TRIED TO GET RECIPES")
        console.log(dbRecipeData)
        const recipes = dbRecipeData.map((recipe) =>
            recipe.get({ plain: true })
        );

        res.render('View-Recipes', {
            recipes,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:ingredient_name', withAuth, async(req, res) => {
    try {
        const dbRecipeData = await RecipeIngredient.findAll({});
        const recipes = dbRecipeData.map((recipe) =>
            recipe.get({ plain: true })
        );
        console.log(recipes);
        searchArray = [];

        for (let i = 0; i < recipes.length; i++) {
            const recipe_ingredient = recipes[i];


            if (recipe_ingredient.ingredient_name === req.params.ingredient_name) {
                const RecipeData = await Recipe.findByPk(recipe_ingredient.recipe_id)
                recipe_ingredient.name = RecipeData.name
                recipe_ingredient.description = RecipeData.description
                recipe_ingredient.image = RecipeData.image
                const secondSearchArray = [];

                recipes.forEach(recipeData => {
                    if (recipeData.recipe_id === recipe_ingredient.recipe_id) {
                        secondSearchArray.push({ ingredient_name: recipeData.ingredient_name, quantity: recipeData.quantity, unit: recipeData.unit })
                    }
                })
                recipe_ingredient.recipe_ingredients = secondSearchArray

                searchArray.push(recipe_ingredient)

            }
            console.log("added recipe_ingredient", recipe_ingredient)
        };
        console.log(searchArray)


        res.render('View-Recipes', {
            recipes: searchArray,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router