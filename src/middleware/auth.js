var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser());

var jwt = require("jsonwebtoken");

var authentication = (req, res, next) => {
  const login_token = req.cookies.login_token || "";

  console.log(login_token);

  if (login_token) {
    jwt.verify(login_token, "sanjay", (err, data) => {
      console.log("check in auth token");
      if (data != undefined) {
        console.log(data + "if dat");
        next();
      } else {
        res.clearCookie("login_token");
        res.redirect("/login");
      }
    });
  } else {
    
    res.redirect("/login");
  }
};

module.exports = { authentication };
