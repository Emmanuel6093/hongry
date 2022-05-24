
const { RecipeIngredient } = require('../models')

const recipeIngredientData = [{
        recipe_id: '1',
        ingredient_name: '1',
        quantity: '2',
        unit: 'Blergons',

    },
    {
        recipe_id: '1',
        ingredient_name: '2',
        quantity: '4',
        unit: 'Bleeergons',

    },
    {
        recipe_id: '2',
        ingredient_name: '3',
        quantity: '2',
        unit: 'Blergons',

    },
    {
        recipe_id: '2',
        ingredient_name: '4',
        quantity: '4',
        unit: 'Bleeergons',

    },
    {
        recipe_id: '3',
        ingredient_name: '5',
        quantity: '2',
        unit: 'Blergons',

    },
    {
        recipe_id: '3',
        ingredient_name: '6',
        quantity: '2',
        unit: 'Bleeergons',

    },
    {
        recipe_id: '4',
        ingredient_name: '7',
        quantity: '2',
        unit: 'Blergons',

    },
    {
        recipe_id: '4',
        ingredient_name: '6',
        quantity: '2',
        unit: 'Bleeeergons',

    },
    {
        recipe_id: '5',
        ingredient_name: '5',
        quantity: '2',
        unit: 'Blergons',

    },
    {
        recipe_id: '5',
        ingredient_name: '4',
        quantity: '2',
        unit: 'Bleeeergons',

    },
]

const seedRecipeIngredient = () => RecipeIngredient.bulkCreate(recipeIngredientData);

module.exports = seedRecipeIngredient
