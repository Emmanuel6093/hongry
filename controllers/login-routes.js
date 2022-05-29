const router = require('express').Router();

// Render the login page (template)
router.get('/', (req, res) => {
    res.render('login');
});

module.exports = router;