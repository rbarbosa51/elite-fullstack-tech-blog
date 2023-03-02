const router = require('express').Router();
const login = require('./login.js');
const createuser = require('./createuser.js');
const createpost = require('./createpost.js');
const updatepost = require('./updatepost.js');

// /api
router.use('/login', login);
router.use('/createuser', createuser);
router.use('/createpost', createpost);
router.use('/updatepost', updatepost);

module.exports = router;