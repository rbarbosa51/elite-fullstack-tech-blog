const router = require('express').Router();

router.get('/', (req,res) => {
    if (req.session.loggedUserID){
        req.session.destroy( () => {
            //res.status(204).end();
            res.render('/login');
        });
    } else {
        //res.status(404).end();
        res.render('login');
    }
    

});

module.exports = router;