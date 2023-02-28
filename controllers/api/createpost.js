const router = require('express').Router();
const { Post, User } = require('../../models');

//title, content, date, creator_id
router.post('/', async (req,res) => {
    console.log(req.body);
    //console.log(req.session.loggedUserID);
    console.log(req.app.locals.loggedUserID)
    //newPostTitle      newPostContent
    //Construct Date
    const date = new Date();
    const strDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    try {
        const currentUser = await User.findByPk(req.app.locals.loggedUserID);
        await Post.create({
            title: req.body.newPostTitle,
            content: req.body.newPostContent,
            date: strDate,
            creator: currentUser.userName,
            creator_id: currentUser.id
        })
    } catch (err) {
        res.render('error', {error: err});
        return;
    }
    res.redirect('/home');
})

module.exports = router;