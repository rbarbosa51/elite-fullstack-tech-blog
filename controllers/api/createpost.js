const router = require('express').Router();
const { Post, User } = require('../../models');

//title, content, date, creator_id
router.post('/', async (req,res) => {
    //Construct Date
    const date = new Date();
    const strDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    try {
        const currentUser = await User.findByPk(req.session.loggedUserID);
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
    console.log('This is the line')
    res.redirect('/');
})

module.exports = router;