const router = require('express').Router();
const createuser = require('./createuser.js');
const createpost = require('./createpost.js');

// /api
router.use('/createuser', createuser);
router.use('/createpost', createpost);

module.exports = router;