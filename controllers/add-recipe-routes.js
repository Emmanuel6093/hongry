const withAuth = require('../utils/auth')
const Recipe = require('../models/Recipe');
const User = require('../models/User');
const RecipeIngredient = require('../models/RecipeIngredient');


const router = require('express').Router();

// Render the Post Recipe (template)
router.get('/', (req, res) => {
    res.render('Post-Recipe');
});


router.post('/', async(req, res) => {
    try {
        const ingredientData = req.body.ingredients;
        console.log("I TRIED")
        console.log(ingredientData, req.session.user_id);
        const newRecipe = await Recipe.create({
            name: req.body.recipeName,
            description: req.body.recipeDesc,
            image: req.body.recipeimg,

        });
        const recipeId = newRecipe.id;
        console.log(recipeId, ingredientData, req.session.user_id);
        ingredientData.forEach(data => {
            data.recipe_id = recipeId;
        })
        await RecipeIngredient.bulkCreate(ingredientData)

        res.redirect('/homepage');
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

module.exports = router;