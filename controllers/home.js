const router = require('express').Router();
//const withAuth = require('../utils/auth');

//Uses withAuth middleware to prevent non logged users from access
router.get('/', async (req, res) => {
    try {
        res.render('homepage' );
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/login', (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
