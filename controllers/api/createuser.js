const router = require('express').Router();
const {User} = require('../../models');

router.post('/', async (req,res) => {
    console.log(req.body);
    try {
        const createdUser = await User.create({userName: req.body.username, password: req.body.password});
    } catch (err) {
        res.render('error', {error: err});
        return;
    }
    res.redirect('../login');
})

module.exports = router;