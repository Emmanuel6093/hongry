const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');
const User = require('./User');
const RecipeIngredient = require('./RecipeIngredient');


Ingredient.belongsToMany(Recipe, {
  through: RecipeIngredient
})

Recipe.hasMany(Ingredient, {
  foreignKey: 'recipe_id',
})

Recipe.belongsToMany(Ingredient,  {
    through: RecipeIngredient
})





