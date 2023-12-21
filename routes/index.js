var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/profile", function (req, res, next) {
  res.render("profile");
});

router.post("/login", function (req, res) {
  const { username, password } = req.body;

  // Check if the password matches the hardcoded value
  if (password === "SmartServTest@123") {
    // Redirect to the profile page on successful login
    res.redirect("/profile");
  } else {
    // Redirect to the home page on unsuccessful login
    res.redirect("/");
  }
});

module.exports = router;
