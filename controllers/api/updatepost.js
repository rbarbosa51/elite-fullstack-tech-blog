const router = require('express').Router();
const {Post} = require('../../models');

router.post('/', async (req,res) => {
    console.log(req.body);
    //res.status(200).send('Exito');
    try {
        const currentPost = await Post.findByPk(req.body.hiddenID);
        currentPost.title = req.body.editTitle;
        currentPost.content = req.body.editContent;
        await currentPost.save();
    } catch (err) {
        res.render('error', {error: err});
    }
    res.redirect('/');
})


module.exports = router;