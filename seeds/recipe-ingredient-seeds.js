
const { RecipeIngredient } = require('../models')

const recipeIngredientData = [{
        recipe_id: '1',
        ingredient_id: '1',
        quantity: '2',
        unit: 'Blergons',
        images_id: '1'
    },
    {
        recipe_id: '1',
        ingredient_id: '2',
        quantity: '4',
        unit: 'Bleeergons',
        images_id: '1'
    },
    {
        recipe_id: '2',
        ingredient_id: '3',
        quantity: '2',
        unit: 'Blergons',
        images_id: '2'
    },
    {
        recipe_id: '2',
        ingredient_id: '4',
        quantity: '4',
        unit: 'Bleeergons',
        images_id: '2'
    },
    {
        recipe_id: '3',
        ingredient_id: '5',
        quantity: '2',
        unit: 'Blergons',
        images_id: '3'
    },
    {
        recipe_id: '3',
        ingredient_id: '6',
        quantity: '2',
        unit: 'Bleeergons',
        images_id: '3'
    },
    {
        recipe_id: '4',
        ingredient_id: '7',
        quantity: '2',
        unit: 'Blergons',
        images_id: '4'
    },
    {
        recipe_id: '4',
        ingredient_id: '6',
        quantity: '2',
        unit: 'Bleeeergons',
        images_id: '4'
    },
    {
        recipe_id: '5',
        ingredient_id: '5',
        quantity: '2',
        unit: 'Blergons',
        images_id: '5'
    },
    {
        recipe_id: '5',
        ingredient_id: '4',
        quantity: '2',
        unit: 'Bleeeergons',
        images_id: '5'
    },
]

const seedRecipeIngredient = () => RecipeIngredient.bulkCreate(recipeIngredientData);

module.exports = seedRecipeIngredient
