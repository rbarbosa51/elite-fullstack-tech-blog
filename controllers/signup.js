const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('signup', {
        loginButton: false
    });
})


module.exports = router;