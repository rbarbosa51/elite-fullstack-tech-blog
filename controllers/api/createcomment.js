const router = require("express").Router();
const { Comment, User } = require("../../models");

//Creates the comment for each Post
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    //Need to get the username if the current user
    const user = await User.findByPk(req.body.userID);
    const date = new Date();
    const metaComment = `--${user.userName}, ${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    await Comment.create({
      content: req.body.comment,
      meta: metaComment,
      article_id: req.body.postID,
    });
  } catch (err) {
    res.render("error", { error: err });
    return;
  }
  //This refreshes to show the comment after it was inputted
  res.redirect(`/comment/${req.body.postID}`);
});

module.exports = router;
