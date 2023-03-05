const router = require("express").Router();

//renders the signup handlebar
router.get("/", (req, res) => {
  res.render("signup", {
    loginButton: true,
  });
});

module.exports = router;
