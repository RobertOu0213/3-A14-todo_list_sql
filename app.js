require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const session = require("express-session");
const routes = require("./routes");
const usePassport = require("./config/passport");
const flash = require("connect-flash");
const app = express();
const PORT = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  session({
    secret: "ThisIsMySecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
usePassport(app);
app.use(flash());
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.user = req.user;
  res.locals.success_msg = req.flash("success_msg");
  res.locals.warning_msg = req.flash("warning_msg");
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`express is listening on http:localhost:${PORT}`);
});
