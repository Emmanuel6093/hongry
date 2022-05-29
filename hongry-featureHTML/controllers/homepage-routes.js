const router = require('express').Router();

// Render the home page (template)
router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;