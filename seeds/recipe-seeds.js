const { Recipe } = require('../models')

const recipeData = [{
        name: 'recipe',
        description: 'Description1',
        user_id: '1'
    },
    {
        name: 'recipe2',
        description: 'description2',
        user_id: '2'
    }, {
        name: 'recipe3',
        description: 'description3',
        user_id: '3'
    }, {
        name: 'recipe4',
        description: 'description4',
        user_id: '4'
    }, {
        name: 'recipe5',
        description: 'description5',
        user_id: '1'
    },
]




const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe