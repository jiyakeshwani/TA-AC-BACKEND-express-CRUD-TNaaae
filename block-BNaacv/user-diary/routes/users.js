var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

router.get("/", (res, req) => {
  res.render("users");
});

router.get("/:id", (res, req) => {
  res.render("singleuser");
});

router.get("/new", (res, req) => {
  res.render("userForm");
});

router.put("/:id", (res, req) => {
  var id = req.params.id;
  id.findByIdAndUpdate({ id }, (err, updatedProduct) => {
    res.send(updatedProduct);
  });
});
router.delete("/:id", (res, req) => {
  var id = req.params.id;
  id.findByIdAndDelete({ id }, (err, deletedProduct) => {
    res.send(`${deletedProduct} was deleted`);
  });
});
module.exports = router;
