const router = require('express').Router();
const loginRoutes = require('./login-routes.js');
const apiRoutes = require('./api');

router.use('/login', loginRoutes);
router.use('/api', apiRoutes);

module.exports = router;