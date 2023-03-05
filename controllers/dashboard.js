const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth.js");

//This is the main dashboard, need to be logged in
router.get("/", withAuth, async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      where: {
        creator_id: req.session.loggedUserID,
      },
      attributes: ["id", "title", "date"],
    });

    const posts = allPosts.map((post) => post.get({ plain: true }));
    //render the dashboard with previous posts
    res.render("dashboard", {
      posts: posts,
      loginButton: req.session.logButton,
    });
    return;
  } catch (err) {
    console.log(err);
    return;
  }
});
module.exports = router;
