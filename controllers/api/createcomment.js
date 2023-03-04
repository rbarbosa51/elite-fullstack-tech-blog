const router = require('express').Router();
const {Comment, User} = require('../../models');

router.post('/', async (req,res) => {
    console.log(req.body);
    let metaComment;
    //{ comment: 'Hola Mundo', postID: '1', userID: '1' }
    try {
        const user = await User.findByPk(req.body.userID);
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const fullYear = date.getFullYear();
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
    res.redirect('/');
});

module.exports = router;