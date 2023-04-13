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

var conn = require("../config/dbConnect");

commentGet = (req, res) => {
  res.render("home");
};

commentPost = (req, res) => {
  var login_token = req.cookies.login_token;

  jwt.verify(login_token, "sanjay", function (err, decoded) {
 

    var comment = req.body.comment;
    var id = decoded.id[0].id;

    var sql = `INSERT INTO comment_table(reg_id,comment) VALUES ('${id}','${comment}')`;

    conn.query(sql, function (err, result) {
      if (err) throw err;
    });
    res.redirect("/home");
  });

  // res.render("home");
};
module.exports = { commentGet, commentPost };
