var express = require("express");
var router = express.Router();

router.get("/new", (res, req) => {
  res.send("student form");
});

router.post("/", (res, req) => {
  res.send("student1");
});

router.get("/", (res, req) => {
  res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
});
router.get("/:id", (res, req) => {
  res.render("studentDetail", {
    student: { name: "rahul", email: "rahul@altcampus.io" },
  });
});
