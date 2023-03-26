var express = require("express");
var app = express();
app.use(express.json());

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var mysql = require("mysql2");

var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added

app.use(cookieParser());
var path=require("path")
app.use("/public", express.static("public"));
app.set("views", path.join(__dirname, "../views"));

var { profileGet, profilePost } = require("../controller/profile");

app.get("/profile", profileGet);

app.post("/profile", profilePost);

module.exports = app;
