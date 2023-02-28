const router = require('express').Router();
const {Post} = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            attributes: ['title','content', 'date', 'creator']
        });
        const posts = allPosts.map(post => post.get({plain: true}));
        //loginButton: !req.app.locals.loggedUserID,
        res.render('home', {posts:posts } );
    } catch (err) {
        //res.status(500).json(err);
        res.render('error', {error: err});
    }
});


module.exports = router;
