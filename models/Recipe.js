const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
   {
    recipe_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    descriptions: {
        type: DataTypes.STRING,
    },

    created_by_user: {
        type: DataTypes.INTEGER,
        references: {
            model:'user',
            key: 'id'
        }
    }

},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

module.exports = Recipe;