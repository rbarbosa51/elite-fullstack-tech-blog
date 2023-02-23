const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('signup', {
        loginButton: true
    });
})


module.exports = router;