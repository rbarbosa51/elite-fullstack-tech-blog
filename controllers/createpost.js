const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('createpost');
});

module.exports = router;