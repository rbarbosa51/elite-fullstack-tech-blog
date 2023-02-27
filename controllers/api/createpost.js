const router = require('express').Router();
const { Post } = require('../../models');

//title, content, date, creator_id
router.post('/', async (req,res) => {
    console.log(req.body);
    res.send('Success');
})

module.exports = router;