const router = require('express').Router();

router.get('/', (req,res) => {
    req.app.locals.loggedUserID = 0;
    if (req.session.loggedUserID){
        req.session.destroy( () => {
            //res.status(204).end();
            res.redirect('/login');
        });
    } else {
        //res.status(404).end();
        res.redirect('/login');
    }
    

});

module.exports = router;