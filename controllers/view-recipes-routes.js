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

router.get('/:id', withAuth, async(req, res) => {
    try {
        const dbRecipeData = await Recipe.findByPk(req.params.id, {
            include: [{ model: RecipeIngredient }],
        });
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

module.exports = router