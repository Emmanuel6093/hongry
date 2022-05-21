const { Recipe } = require('../models')

const recipeData = [{
        name: 'Your Mom',
        description: 'Probably quite loose if you ask about town',
        user_id: '1'
    },
    {
        name: 'Your Mom2',
        description: 'Probably quite loose if you ask about town2',
        user_id: '2'
    }, {
        name: 'Your Mom3',
        description: 'Probably quite loose if you ask about town3',
        user_id: '3'
    }, {
        name: 'Your Mom4',
        description: 'Probably quite loose if you ask about town4',
        user_id: '4'
    }, {
        name: 'Your Mom5',
        description: 'Probably quite loose if you ask about town5',
        user_id: '1'
    },
]




const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe