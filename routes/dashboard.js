var express = require("express");
var app = express();
app.use(express.json());
var ejs = require("ejs");

const bcrypt = require("bcrypt");

app.use(express.static("css"));
app.use(express.static("images"));

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var mysql = require("mysql2");

var cookieParser = require("cookie-parser");
// app.use(cookieParser());
var jwt = require("jsonwebtoken");

app.use(cookieParser());

app.use("/public", express.static("public"));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hrms",
});

con.connect((err) => {
  if (err) throw err;
  console.log(" database connected ");
});


app.get('/dashboard',(req,res)=>{

    var login_token = req.cookies.login_token

    jwt.verify(login_token, "sanjay", function (err, decoded) {
        // console.log(decoded.id[0].id)
      });
    res.render('dashboard.ejs');
})

module.exports = app

