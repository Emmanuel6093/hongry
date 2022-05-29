 const Recipe = require('./Recipe');
 const User = require('./User');
 const RecipeIngredient = require('./RecipeIngredient');


 Recipe.hasMany(RecipeIngredient, {
     foreignKey: 'recipe_id',
     onDelete: 'SET NULL'
 })

 RecipeIngredient.belongsTo(Recipe, {
     foreignKey: 'recipe_id',
     onDelete: 'SET NULL'
 })

 User.hasMany(Recipe, {
     onDelete: 'SET NULL'
 })

 Recipe.belongsTo(User, {
     onDelete: 'SET NULL'

 })


 module.exports = {
     User,
     Recipe,
     RecipeIngredient,
 };