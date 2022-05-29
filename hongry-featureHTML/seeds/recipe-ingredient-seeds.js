const { RecipeIngredient } = require('../models')

const recipeIngredientData = [{
        recipe_id: '1',
        ingredient_name: 'salt',
        quantity: '2',
        unit: 'Blergons',

    },
    {
        recipe_id: '1',
        ingredient_name: 'eggs',
        quantity: '4',
        unit: 'Bleeergons',

    },
    {
        recipe_id: '2',
        ingredient_name: 'sugar',
        quantity: '2',
        unit: 'Blergons',

    },
    {
        recipe_id: '2',
        ingredient_name: 'water',
        quantity: '4',
        unit: 'Bleeergons',

    },
    {
        recipe_id: '3',
        ingredient_name: 'flour',
        quantity: '2',
        unit: 'Blergons',

    },
    {
        recipe_id: '3',
        ingredient_name: 'vanilla extract',
        quantity: '2',
        unit: 'Bleeergons',

    },
    {
        recipe_id: '4',
        ingredient_name: 'bananas',
        quantity: '2',
        unit: 'Blergons',

    },
    {
        recipe_id: '4',
        ingredient_name: 'apples',
        quantity: '2',
        unit: 'Bleeeergons',

    },
    {
        recipe_id: '5',
        ingredient_name: 'peaches',
        quantity: '2',
        unit: 'Blergons',

    },
    {
        recipe_id: '5',
        ingredient_name: 'heavy cream',
        quantity: '2',
        unit: 'Bleeeergons',

    },
]

const seedRecipeIngredient = () => RecipeIngredient.bulkCreate(recipeIngredientData);

module.exports = seedRecipeIngredient