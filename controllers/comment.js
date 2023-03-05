const router = require('express').Router();
const {Post, Comment} = require('../models');
const withAuth = require('../utils/auth.js');

router.get('/:id', withAuth, async (req,res) => {
    
    try {
        const aPost = await Post.findByPk(req.params.id);
        const post = aPost.get({plain:true});
        const aComments = await Comment.findAll({
            where: {
                article_id: req.params.id
            }
        });
        const comments = aComments.map(c => c.get({plain:true}));
        res.render('editcomment', {post:post, comments: comments })

    } catch (err) {
        res.render('error', {error:err});
        return;
    }
})


module.exports = router;