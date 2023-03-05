const router = require("express").Router();
const { Post } = require("../../models");

//This deletes the post
router.post("/", async (req, res) => {
  try {
    await Post.destroy({
      where: {
        id: req.body.hiddenID,
      },
    });
  } catch (err) {
    res.render("error", { error: err });
    return;
  }
  //Go back to main so you can see the post eliminated
  res.redirect("/");
});

module.exports = router;
