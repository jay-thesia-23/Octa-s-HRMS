var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added

var { showProfileGet } = require("../controller/showProfile");
var path = require("path");
app.set("views", path.join(__dirname, "../views"));
var { authentication } = require("../middleware/authMiddleware");


app.get("/showprofile", authentication, showProfileGet);

module.exports = app;
