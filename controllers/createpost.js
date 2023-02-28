const router = require('express').Router();
//const withAuth = require('../utils/auth.js');


router.get('/', async (req,res) => {
    
    
    res.render('createpost');
});

module.exports = router;