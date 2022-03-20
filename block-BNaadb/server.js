// delete a user

user.get("/users/:id/delete", (res, req, next) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) return err;
    res.redirect("/users");
  });
});
