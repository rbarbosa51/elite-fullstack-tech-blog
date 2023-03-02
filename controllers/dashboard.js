const router = require('express').Router()
const withAuth = require('../utils/auth.js');

router.get('/', withAuth, (req,res) => {
    
    res.render('dashboard', {
        loginButton: req.session.logButton
    })
})
module.exports = router;