const router = require("express").Router();
const { Post } = require("../../models");

//gets the post and updates its data
router.post("/", async (req, res) => {
  console.log(req.body);
  //res.status(200).send('Exito');
  try {
    const currentPost = await Post.findByPk(req.body.hiddenID);
    currentPost.title = req.body.editTitle;
    currentPost.content = req.body.editContent;
    await currentPost.save();
  } catch (err) {
    res.render("error", { error: err });
  }
  //Go back to main so you can see your changes displayed
  res.redirect("/");
});

module.exports = router;
