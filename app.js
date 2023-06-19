const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
// const bcrypt = require("bcrypt.js");
const app = express();
const PORT = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`express is listening on http:localhost:${PORT}`);
});
