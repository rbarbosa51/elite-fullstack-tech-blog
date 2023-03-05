const router = require("express").Router();

//Logs off by setting session to 0 and show the login button
router.get("/", (req, res) => {
  req.session.loggedUserID = 0;
  req.session.logButton = true;
  res.redirect("/login");
});

module.exports = router;
