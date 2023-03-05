const router = require('express').Router();
const {User} = require('../../models');

router.post('/', async (req,res) => {
    console.log(req.body);
    try {
        const loggedUser = await User.findOne({
            where: {
                userName: req.body.username
            }
        });
        if (!loggedUser) {
            res.render('error', {error: 'Either wrong username or password'});
            return;
        }
        const validPassword = await loggedUser.checkPassword(req.body.password);
        if (!validPassword) {
            res.render('error', {error: 'Either wrong username or password'});
            return;
        }
        req.session.loggedUserID = loggedUser.id;
        req.session.logButton = false;
        console.log("\nLogged session:" + req.session.loggedUserID + "\n\n");
    } catch (err) {
        res.render('error',{error:err});
        return;
    }
    res.redirect('/dashboard');
    return;
})

module.exports = router;
