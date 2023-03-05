const router = require('express').Router();
const {Comment, User} = require('../../models');

router.post('/', async (req,res) => {
    console.log(req.body);
    let metaComment;
    try {
        const user = await User.findByPk(req.body.userID);
        const date = new Date();
        const metaComment = `--${user.userName}, ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        const newComment = await Comment.create({
            content: req.body.comment,
            meta: metaComment,
            article_id: req.body.postID
        });

    } catch (err) {
        res.render('error', {error: err});
        return;
    }
    res.redirect(`/comment/${req.body.postID}`);
});

module.exports = router;