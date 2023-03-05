const router = require("express").Router();
const { Post, User } = require("../../models");

//This creates the post itself

router.post("/", async (req, res) => {
  //Construct Date
  const date = new Date();
  const strDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  try {
    const currentUser = await User.findByPk(req.session.loggedUserID);
    await Post.create({
      title: req.body.newPostTitle,
      content: req.body.newPostContent,
      date: strDate,
      creator: currentUser.userName,
      creator_id: currentUser.id,
    });
  } catch (err) {
    res.render("error", { error: err });
    return;
  }
  //Once you write the post go to the home so you can see it displayed
  res.redirect("/");
});

module.exports = router;
