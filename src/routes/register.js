var express = require("express");
const session = require("express-session");
var app = express();
app.use(express.json());
const bcrypt = require("bcrypt");
app.use(express.static("css"));
app.use(express.static("images"));
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var mysql = require("mysql2");
var cookieParser = require("cookie-parser");

var jwt = require("jsonwebtoken");

var path=require("path")
var {registerGet, Inemail, cloneEmailPost,registerPost,verifyGet}=require("../controller/register")
var router=express.Router()
app.use(cookieParser());


app.set("views",path.join(__dirname,"../views"))

// app.use(
//   session({
//     secret: "your-secret-key",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24,
//     },
//   })
// );


app.get("/register", registerGet);

app.post("/clone-email", cloneEmailPost);

app.post("/register", registerPost);

app.get("/verify", verifyGet);

module.exports = app;
