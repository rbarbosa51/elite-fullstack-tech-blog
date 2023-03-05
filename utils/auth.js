function withAuth(req, res, next) {
    // If the user isn't logged in, redirect them to the login route
    if (req.session.loggedUserID === 0 || !req.session.loggedUserID) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  