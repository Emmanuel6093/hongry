<<<<<<< HEAD
const sequelize = require('../config/connection');
const { Recipe, Ingredient } = require('../models');

const recipeIngredient = 
[
  {
    title: "Easy and hearty lentil bolognese",
    imageURL:
      "",
    description:
      "Pasta is the ultimate comfort food and this one is easy to throw together on a busy Monday using some pantry staples",
    ingredients: [
      "2 x medium tomatoes",
      "1 x large can of lentils⁣⁣⁣",
      "250g passata",
      "500g pasta",
      "100g baby spinach",
    ],
    method:
      "Fry the two diced tomatoes. After a few minutes, add in the passata. Once the passata has warmed up, add in the can of (rinsed) lentils and the baby spinach. Next, add some fresh basil. Add some seasoning (basil, italian herbs, salt and pepper). Cook until the sauce ⁣has thickened. Stir in your cooked pasta and enjoy",
    createdAt: new Date(),
  },
  {
    title: "Strawberry milkshake smoothie bowl",
    imageURL:
      "",
    description:
      "Like a strawberry milkshake but refined sugar and dairy free!",
    ingredients: [
      "1 x cup of frozen strawberries",
      "half a frozen banana⁣⁣⁣",
      "1 tsp sweetener",
      "⁣⁣3/4 cup of almond milk",
    ],
    method: "Blend ingredients together and add toppings of choice",
    cookingTime: "15",
    createdAt: new Date(),
  },
  {
    title: "Chickpea mayo filling",
    imageURL:
      "",
    description:
      "A tasty vegetarian filling for sandwiches, wraps or in salads",
    ingredients: [
      "1 x small can of chickpeas",
      "2 x tbs of mayonaise",
      "lemon juice",
      "garlic powder",
      "chives",
    ],
    method:
      "Rinse the chickpeas and smash them up into pieces. Add the rest of the ingredients and mix together",
    createdAt: new Date(),
  },
  {
    title: "Baked pumpkin falafel",
    imageURL:
      "",
    description: "A great source of protein for salads, wraps or tacos",
    ingredients: [
      "1 cup pumpkin puree",
      "½ cup of chickpeas⁣⁣",
      "3 tbs of flour⁣⁣",
      "1 clove of garlic",
      "Sesame seeds⁣⁣",
    ],
    method:
      "Purée the pumpkin and chickpeas with a stick blender or in a blender, mix in the garlic (crushed) and spices and the flour. Refrigerate the mixture for at least three hours until the mixture is quite firm. Form small falafels and dip into sesame seeds to coat them all around. Place the falafels on a baking tray with wax paper and bake at 200° C for 20 minutes, turning the falafels over at 10 minutes to bake each side",
    createdAt: new Date(),
  }
];

const seedRecipeIngredient = () => recipeIngredient.bulkCreate(recipeIngredientData);

module.exports = seedRecipeIngredient;
=======
const { RecipeIngredient } = require('../models')

const recipeIngredientData = [{
        recipe_id: '1',
        ingredient_id: '1',
        quantity: '2',
        unit: 'Blergons',
        images_id: '1'
    },
    {
        recipe_id: '1',
        ingredient_id: '2',
        quantity: '4',
        unit: 'Bleeergons',
        images_id: '1'
    },
    {
        recipe_id: '2',
        ingredient_id: '3',
        quantity: '2',
        unit: 'Blergons',
        images_id: '2'
    },
    {
        recipe_id: '2',
        ingredient_id: '4',
        quantity: '4',
        unit: 'Bleeergons',
        images_id: '2'
    },
    {
        recipe_id: '3',
        ingredient_id: '5',
        quantity: '2',
        unit: 'Blergons',
        images_id: '3'
    },
    {
        recipe_id: '3',
        ingredient_id: '6',
        quantity: '2',
        unit: 'Bleeergons',
        images_id: '3'
    },
    {
        recipe_id: '4',
        ingredient_id: '7',
        quantity: '2',
        unit: 'Blergons',
        images_id: '4'
    },
    {
        recipe_id: '4',
        ingredient_id: '6',
        quantity: '2',
        unit: 'Bleeeergons',
        images_id: '4'
    },
    {
        recipe_id: '5',
        ingredient_id: '5',
        quantity: '2',
        unit: 'Blergons',
        images_id: '5'
    },
    {
        recipe_id: '5',
        ingredient_id: '4',
        quantity: '2',
        unit: 'Bleeeergons',
        images_id: '5'
    },
]

const seedRecipeIngredient = () => RecipeIngredient.bulkCreate(recipeIngredientData);

module.exports = seedRecipeIngredient
>>>>>>> 802b355262965ba65238dba40f3158af85ccfc01
