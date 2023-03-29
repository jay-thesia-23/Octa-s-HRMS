var express = require("express");
var app = express();
app.use(express.json());
var ejs = require("ejs");

const bcrypt = require("bcrypt");

app.use(express.static("css"));
app.use(express.static("images"));
const util = require("util");
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts)   //Added
app.set('layout', '../views/layouts/main') //added
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var router=express.Router()

var cookieParser = require("cookie-parser");

var path=require("path")
app.set("views",path.join(__dirname,"../views"))

app.use(cookieParser());

var { commentGet,commentPost }=require("../controller/comment")

app.use("/public", express.static("public"));

app.get("/comment", commentGet);


app.post("/comment", commentPost);
module.exports = app ;
