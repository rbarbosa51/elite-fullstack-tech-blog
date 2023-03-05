const router = require("express").Router();
const { Post, Comment } = require("../models");
const withAuth = require("../utils/auth.js");

//get post data and then render editpost
router.get("/:id", withAuth, async (req, res) => {
  try {
    const mPost = await Post.findByPk(req.params.id);
    const aPost = await mPost.get({ plain: true });
    res.render("editpost", { post: aPost });
    return;
  } catch (err) {
    console.log(err);
    res.render("error", { error: err });
    return;
  }
});

module.exports = router;
