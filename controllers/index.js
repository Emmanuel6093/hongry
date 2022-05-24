// NEEDS ROUTES FOR ALL PAGES TO BE COMPLETED AND REQUIRED BELOW---** *Homepage/All-Recipes/Single-Recipe/Login*DONE*Register-User/Create-Recipe**UPLOAD IMAGE/Save Recipe/Search by Ingredients/Search by Recipe Name**   
// FUTURE DEVELOPMENT IDEAS: "Comments/User Profiles/Video Embedding/RTMP Streaming service/Purchase Ingredients/Online Classes/Groups/Search by genre/Search by food category/"

const router = require('express').Router();
const loginRoutes = require('./login-routes');
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-routes')
const addrecipesroutes = require('./add-recipe-routes')
    // const viewrecipesroutes = require('./view-recipes-routes')

router.use('/login', loginRoutes);
router.use('/api', apiRoutes);
router.use('/', homepageRoutes);
router.use('/addrecipes', addrecipesroutes)
    // router.use('/viewrecipes', viewrecipesroutes)

module.exports = router;