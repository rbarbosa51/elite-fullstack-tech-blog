const router = require("express").Router();
const { User } = require("../../models");

//Either logs in or redirects to the error handlebar
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const loggedUser = await User.findOne({
      where: {
        userName: req.body.username,
      },
    });
    //redirect if no user
    if (!loggedUser) {
      res.render("error", { error: "Either wrong username or password" });
      return;
    }
    //redirect if no password
    const validPassword = await loggedUser.checkPassword(req.body.password);
    if (!validPassword) {
      res.render("error", { error: "Either wrong username or password" });
      return;
    }
    //sets the session data
    req.session.loggedUserID = loggedUser.id;
    req.session.logButton = false;
    //debugging
    console.log("\nLogged session:" + req.session.loggedUserID + "\n\n");
  } catch (err) {
    res.render("error", { error: err });
    return;
  }
  //Once you actually log in go to the dashboard
  res.redirect("/dashboard");
  return;
});

module.exports = router;
