const router = require('express').Router()
const {Post} = require('../models');
const withAuth = require('../utils/auth.js');

router.get('/', async (req,res) => {
    //console.log('Here');
    try {
        const allPosts = await Post.findAll({
            where: {
                creator_id: req.session.loggedUserID
            },
            attributes: ['id', 'title', 'date']
        });
        //console.log(allPosts);
        const posts = allPosts.map(post => post.get({plain: true}));
        res.render('dashboard', {
            posts: posts,
            loginButton: req.session.logButton
        })
        return;
    } catch (err) {
        console.log(err);
        return;
    }
    // res.render('dashboard', {
    //     loginButton: req.session.logButton
    // })
})
module.exports = router;