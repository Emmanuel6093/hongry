const router = require('express').Router();
const { User } = require('../../models');

// Create a new user using the form input values from the login page (template)
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Allow users to login
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    // If no data exists that means the associated user does not exist at all, return error
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    // Check the submitted password
    const validPassword = dbUserData.checkPassword(req.body.password);
    // If it is not valid, notify the user
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
    // Otherwise, save the session so we can refer to these parameters and update the state of the application accordingly
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

// Terminate sessions and redirect to main page
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;