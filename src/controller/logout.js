var express = require("express");
var ejs = require("ejs");
var path = require("path");
var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const util = require("util");
var bodyparser = require("body-parser");

var app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var mysql = require("mysql2");
app.use(cookieParser());
var path = require("path");
// app.set("views",path.join(__dirname,"views"))

var conn = require("../config/dbConnect");


var path=require("path")
app.set("views",path.join(__dirname,"../views"))


var logoutGet=(req,res)=>{
    res.clearCookie("session_id");
   res.clearCookie("login_token")
   res.redirect("/login")
    // res.render("logout",{layout:false})
}




module.exports={logoutGet}