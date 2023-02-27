const router = require('express').Router()
const withAuth = require('../utils/auth.js');

router.get('/',withAuth, (req,res) => {
    res.render('dashboard', {
        loginButton: false
    })
})
module.exports = router;