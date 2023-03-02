const session = require('express-session');

const router = require('express').Router();

router.get('/', (req,res) => {
    req.session.loggedUserID = 0;
    req.session.logButton = true;
    // req.session.destroy( () => {
    //     //debugging
    //     try {
    //         console.log('\n\nLog out: Logged user: ' + req.session.loggedUserID);
    //     } catch (err) {
    //         console.log('error:\n' + err);
    //     }
        
    res.redirect('/login');
    //})
    // if (req.session.loggedUserID){
    //     req.session.destroy( () => {
    //         //res.status(204).end();
    //         res.redirect('/login');
    //     });
    // } else {
    //     //res.status(404).end();
    //     res.redirect('/login');
    // }
    

});

module.exports = router;