const router = require('express').Router();
const {Post} = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            attributes: ['id', 'title','content', 'date', 'creator']
        });
        const posts = allPosts.map(post => post.get({plain: true}));
        //By default it shows the log button
        console.log('Logged user: ' + req.session.loggedUserID);
        
        let logBtnShow = (req.session.loggedUserID === 0) ? true : false;
        res.render('home', {posts:posts, loginButton: logBtnShow } );
    } catch (err) {
        //res.status(500).json(err);
        res.render('error', {error: err});
    }
});


module.exports = router;
