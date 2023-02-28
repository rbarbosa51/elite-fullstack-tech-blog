const router = require('express').Router();
const {User,Post} = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    
    
    try {
        //const currentUser = await User.findByPk(req.app.locals.loggedUserID);
        const allPosts = await Post.findAll({
            attributes: ['title','content', 'date', 'creator']
        });
        const posts = allPosts.map(post => post.get({plain: true}));
        //loginButton: !req.app.locals.loggedUserID,
        res.render('home', {posts:posts } );
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
