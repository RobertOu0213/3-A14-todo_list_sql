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

//render detail list
router.get("/:id", (req, res) => {
  const UserId = req.user.id;
  const id = req.params.id;
  return Todo.findOne({ where: { id, UserId } })
    .then((todo) => res.render("detail", { todo: todo.toJSON() }))
    .catch((error) => console.log(error));
});

//render edit
router.get("/:id/edit", (req, res) => {
  const UserId = req.user.id;
  const id = req.params.id;

  return Todo.findOne({ where: { id, UserId } })
    .then((todo) => res.render("edit", { todo: todo.toJSON() }))
    .catch((error) => console.log(error));
});

//put edit

router.put("/:id", (req, res) => {
  const UserId = req.user.id;
  const id = req.params.id;
  const { name, isDone } = req.body;

  Todo.findOne({ where: { UserId, id } })
    .then((todo) => {
      todo.name = name;
      todo.isDone = isDone === "on";
      return todo.save();
    })
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

//delete
router.delete("/:id", (req, res) => {
  const UserId = req.user.id;
  const id = req.params.id;
  return Todo.findOne({ id, UserId })
    .then((todo) => todo.destroy())
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

module.exports = router;
