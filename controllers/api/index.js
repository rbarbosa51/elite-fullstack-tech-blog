const router = require('express').Router();
const createuser = require('./createuser.js');

// /api
router.use('/createuser', createuser);

module.exports = router;