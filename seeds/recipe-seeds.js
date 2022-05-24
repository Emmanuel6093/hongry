const { Recipe } = require('../models')

const recipeData = [{
        name: 'recipe',
        description: 'Description1',

        image: '1'
    },
    {
        name: 'recipe2',
        description: 'description2',

        image: '2'
    },
    {
        name: 'recipe3',
        description: 'description3',

        image: '3'
    },
    {
        name: 'recipe4',
        description: 'description4',

        image: '4'
    },
    {
        name: 'recipe5',
        description: 'description5',

        image: '5'
    },
]




const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe