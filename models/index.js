 const Recipe = require('./Recipe');
 const Ingredient = require('./Ingredient');
 const User = require('./User');
 const RecipeIngredient = require('./RecipeIngredient');
 const Images = require('./Images')


 Ingredient.belongsToMany(Recipe, {
     through: { model: RecipeIngredient }
 })

 Recipe.belongsToMany(Ingredient, {
     through: { model: RecipeIngredient }
 })

 Images.belongsTo(Recipe, {
     foreignKey: 'recipe_id'
 })

 Recipe.hasOne(Images, {
     foreignKey: 'recipe_id'
 })

 User.hasMany(Recipe, {
     foreignKey: 'user_id',
     onDelete: 'SET NULL'
 })

 Recipe.belongsTo(User, {
     foreignKey: 'user_id',
     onDelete: 'SET NULL'
 })


 module.exports = {
     User,
     Recipe,
     Ingredient,
     RecipeIngredient,
     Images
 };