const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class RecipeIngredient extends Model {}

RecipeIngredient.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    recipe_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'recipe',
            key: 'id'
        }
    },

    ingredient_name: {
        type: DataTypes.STRING,
    },

    quantity: {
        type: DataTypes.INTEGER,

    },

    unit: {
        type: DataTypes.STRING,
    },



}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe_ingredient',
});

module.exports = RecipeIngredient;