const withAuth = require('../utils/auth')
const Recipe = require('../models/Recipe');
const User = require('../models/User');
const RecipeIngredient = require('../models/RecipeIngredient');

const router = require('express').Router();

//Get all recipes and render via View-Recipe.handlebars
router.get('/', (req, res) => {
    res.render('View-Recipes');
});

router.get('/', async(req, res) => {
    try {
        const dbRecipeData = await Recipe.findAll({
            include: [{
                model: RecipeIngredient,
                attributes: ['recipe_id', 'ingredient_name', 'quantity', 'unit', ''],
            }, ],
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

router.get('/viewrecipes/:id', withAuth, async(req, res) => {
    try {
        const dbRecipeData = await Recipe.findByPk(req.params.id, {
            through: [{
                model: RecipeIngredient,
                attributes: [
                    'recipe_id',
                    'ingredient_name',
                    'quantity',
                    'unit',
                ],
            }, ],
        });
        const recipe = dbRecipeData.get({ plain: true });
        res.render('View-Recipes', { recipe, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});