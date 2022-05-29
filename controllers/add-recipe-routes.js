const withAuth = require("../utils/auth");
const Recipe = require("../models/Recipe");
const User = require("../models/User");
const RecipeIngredient = require("../models/RecipeIngredient");
const path = require("path");
const { uuid } = require("uuidv4");

const multer = require("multer");

const cloudinary = require("./cloudinary");

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: "recipe-images",
    allowedFormats: ["jpg", "png", "jpeg"],
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

const router = require("express").Router();

// Render the Post Recipe (template)
router.get("/", (req, res) => {
    res.render("Post-Recipe");
});

router.post("/", upload.single("recipeImage"), async(req, res) => {
    try {
        const recipeData = JSON.parse(req.body.recipeInfo);
        const ingredientData = recipeData.ingredients;
        console.log("I TRIED");
        console.log(ingredientData, req.session.user_id);
        const newRecipe = await Recipe.create({
            name: recipeData.recipeName,
            description: recipeData.recipeDesc,
            image: "https://res.cloudinary.com/dtbmceecb/image/upload/v1653702979/" + req.file.filename,
        });
        const recipeId = newRecipe.id;
        console.log(recipeId, ingredientData, req.session.user_id);
        ingredientData.forEach((data) => {
            data.recipe_id = recipeId;
        });
        await RecipeIngredient.bulkCreate(ingredientData);
        res.status(200).json();
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
    // res.redirect("/");
});

module.exports = router;