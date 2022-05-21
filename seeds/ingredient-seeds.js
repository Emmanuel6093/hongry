const { Ingredient } = require('../models')

const ingredientData = [{
        name: "Salt"
    },
    {
        name: "Eggs"
    },
    {
        name: "Banana"
    },
    {
        name: "Sugar"
    },
    {
        name: "Meatball"
    },
    {
        name: "Human Soul"
    },
    {
        name: "Live baby"
    },
]




const seedIngredient = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredient