var express = require("express");
var app = express();
app.use(express.json());
var ejs = require("ejs");

const bcrypt = require("bcrypt");

app.use(express.static("css"));
app.use(express.static("images"));
const util = require("util");

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var router=express.Router()

var cookieParser = require("cookie-parser");

var path=require("path")
app.set("views",path.join(__dirname,"../views"))
var {logoutGet}=require("../controller/logout")


app.get("/logout",logoutGet)



module.exports=app