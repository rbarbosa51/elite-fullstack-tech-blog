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
        let logBtnShow = true;
        try {
            //This is for debugging and prevents glitching if you manually delete the cookie from the browser
            console.log('Logged user: ' + req.session.loggedUserID);
            logBtnShow = (req.session.loggedUserID === 0) ? true : false;
        } catch (err) {
            console.log(err);
            return;
        }
        
        res.render('home', {posts:posts, loginButton: logBtnShow } );
    } catch (err) {
        //res.status(500).json(err);
        res.render('error', {error: err});
    }
});


module.exports = router;
