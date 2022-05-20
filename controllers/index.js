// NEEDS ROUTES FOR ALL PAGES TO BE COMPLETED AND REQUIRED BELOW---** *Homepage/All-Recipes/Single-Recipe/Login*DONE*/Register-User/Create-Recipe**UPLOAD IMAGE/Save Recipe/Search by Ingredients/Search by Recipe Name**   
// FUTURE DEVELOPMENT IDEAS: "Comments/User Profiles/Video Embedding/RTMP Streaming service/Purchase Ingredients/Online Classes/Groups/Search by genre/Search by food category/"

const router = require('express').Router();
const loginRoutes = require('./login-routes.js');
const apiRoutes = require('./api');

router.use('/login', loginRoutes);
router.use('/api', apiRoutes);

module.exports = router;