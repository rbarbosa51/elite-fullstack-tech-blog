const router = require('express').Router();
const {Post, Comment} = require('../models');

router.get('/:id', async (req,res) => {
    //res.status(200).send(`Successful in ${req.params.id}`);
    try {
        const mPost = await Post.findByPk(req.params.id);
        const aPost = await mPost.get({plain: true})
        res.render('editpost', {post: aPost});
        return;

    } catch (err) {
        console.log(err);
        res.render('error', {error: err});
        return;
    }
    //res.render('editpost', {post: mPost});
})


module.exports = router;