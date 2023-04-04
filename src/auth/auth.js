const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const jwt=require("jsonwebtoken")
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added
var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hrms",
});

const authentication = (req, res, next) => {
  let login_token = req.cookies.login_token || "";

  
  if (login_token) {
    jwt.verify(login_token, "sanjay", (err, data) => {

      next();
    });
  } else {
    res.redirect("/login");
  }
};

module.exports={authentication}
