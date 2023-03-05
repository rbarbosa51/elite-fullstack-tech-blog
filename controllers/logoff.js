const session = require('express-session');

const router = require('express').Router();

router.get('/', (req,res) => {
    req.session.loggedUserID = 0;
    req.session.logButton = true;
    res.redirect('/login');
    
});

module.exports = router;