const router = require("express").Router();
const withAuth = require("../utils/auth.js");

//create post
router.get("/", withAuth, async (req, res) => {
  res.render("createpost");
});

module.exports = router;
