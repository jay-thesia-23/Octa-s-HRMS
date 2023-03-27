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

app.use(cookieParser());

var { loginGet,Inemail,loginPost }=require("../controller/login")

app.use("/public", express.static("public"));

app.get("/login", loginGet);


app.post("/login", loginPost);
module.exports = app ;
