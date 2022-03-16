var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const user = require("../models/usermodel");

router.get("/", (res, req) => {
  user.find({}, (err, user) => {
    if (err) return next(err);
    res.render("user", { user: user });
  });
});

router.get("/:id", (res, req) => {
  res.render("singleuser");
});

router.get("/new", (res, req) => {
  res.render("userForm");
});

router.get("/:id", (res, req) => {
  var id = req.params.id;
  user.findById({ id }, (err, singleuser) => {
    if (err) return next(err);
    res.render("singleuser", { singleuser: singleuser });
  });
});

module.exports = router;
