const seedImages = require('./images-seeds');
const seedIngredient = require('./ingredient-seeds');
const seedRecipe = require('./recipe-seeds');
const seedRecipeIngredient = require('./recipe-ingredient-seeds');
const seedUsers = require('./user-seeds')

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedUsers();
    console.log('--------------');

    await seedIngredient();
    console.log('--------------');

    await seedRecipe();
    console.log('--------------');

    await seedImages();
    console.log('--------------');

    await seedRecipeIngredient();
    console.log('--------------');

    process.exit(0);
};

seedAll();