const router = require("express").Router();
const { User } = require("../../models");

//This creates the User, once done propmts to login.
//IT DOES NOT LOG IN AUTOMATICALLY!!! This is by design
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      userName: req.body.username,
      password: req.body.password,
    });
  } catch (err) {
    res.render("error", { error: err });
    return;
  }
  res.redirect("../login");
});

module.exports = router;
