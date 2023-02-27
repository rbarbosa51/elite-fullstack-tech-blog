const router = require('express').Router();
const apiRoutes = require('./api');
const home = require('./home.js');
const login = require('./login.js');
const signup = require('./signup.js');
const dashboard = require('./dashboard.js');
const createpost = require('./createpost.js');

router.use('/', home);
router.use('/login', login);
router.use('/signup', signup);
router.use('/dashboard', dashboard);
router.use('/createpost', createpost)
router.use('/api', apiRoutes);

module.exports = router;
