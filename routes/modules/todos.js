const express = require("express");
const router = express.Router();

const db = require("../../models");
const Todo = db.Todo;

//new
router.get("/new", (req, res) => {
  res.render("new");
});

//create todo
router.post("/", (req, res) => {
  const { name } = req.body;
  const UserId = req.user.id;
  Todo.create({ name, UserId })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => console.log(error));
});

//detail list
router.get("/:id", (req, res) => {
  const id = req.params.id;
  return Todo.findByPk(id)
    .then((todo) => res.render("detail", { todo: todo.toJSON() }))
    .catch((error) => console.log(error));
});

module.exports = router;