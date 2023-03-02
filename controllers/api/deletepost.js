const router = require('express').Router();
const {Post} = require('../../models');

router.post('/', async (req,res) => {
    try {
        await Post.destroy({
            where: {
                id: req.body.hiddenID
            }
        })
    } catch (err) {
        res.render('error', {error: err})
        return;
    }
    res.redirect('/');
})


module.exports = router;