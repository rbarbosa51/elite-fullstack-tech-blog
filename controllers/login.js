const router = require("express").Router();

//render the login handlebar
router.get("/", (req, res) => {
  res.render("login", {
    loginButton: false,
  });
});

module.exports = router;
