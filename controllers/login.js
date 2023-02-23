const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('login', {
        loginButton: false
    });
})


module.exports = router;