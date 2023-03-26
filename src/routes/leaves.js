var mysql = require("mysql2");
var express = require("express");
var app = express();
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added
var jwt = require("jsonwebtoken");
var {leaveGet,leavePost}=require("../controller/leaves")
var path=require("path")
app.set("views",path.join(__dirname,"../views"))

app.get("/leaves", leaveGet);

app.post("/leaves",leavePost);

module.exports = app;
