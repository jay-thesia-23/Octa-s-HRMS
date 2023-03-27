const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added

var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");

app.use(cookieParser());
var conn = require("../config/dbConnect");

var abcGet = function (req, res) {
  var login_token = req.cookies.login_token;

  jwt.verify(login_token, "sanjay", function (err, decoded) {
    login_user__id = decoded.id[0].id;
  });

  const d = new Date();
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var fulldate = day + "/" + month + "/" + year;

  console.log(fulldate + "fulldate");
  var datequary = `select date from check_master where reg_id='${login_user__id}' and date='${fulldate}';`;
  conn.query(datequary, function (err, data) {
    if (err) throw err;
    console.log(data.length);
    if (data.length == 0) {
      console.log("wrong");
    } else {
      console.log(data, "data");
      query_date = data[0].date;
      console.log(query_date, "query in date");
      if (query_date == fulldate) {
        var time = `select time from check_master where reg_id='${login_user__id}' and date='${fulldate}';`;
        conn.query(time, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
      } else {
        console.log("somthing went wrong!!!!!");
      }
    }
  });
};

var breakInGet = function (req, res) {
  var login_token = req.cookies.login_token;

  jwt.verify(login_token, "sanjay", function (err, decoded) {
    login_user__id = decoded.id[0].id;
  });

  const d = new Date();
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var fulldate = day + "/" + month + "/" + year;

  var datequary = `select date from breck_master where reg_id='${login_user__id}' and date='${fulldate}';`;
  conn.query(datequary, function (err, data) {
    if (err) throw err;
    if (data.length == 0) {
      console.log("wrong");
    } else {
      query_date = data[0].date;
      if (query_date == fulldate) {
        var time = `select time from breck_master where reg_id='${login_user__id}' and date='${fulldate}';`;
        conn.query(time, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
      } else {
        console.log("somthing went wrong!!!!!");
      }
    }
  });
};

var checkoutGet = function (req, res) {
  var login_token = req.cookies.login_token;

  jwt.verify(login_token, "sanjay", function (err, decoded) {
    login_user__id = decoded.id[0].id;
  });

  const d = new Date();
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var fulldate = day + "/" + month + "/" + year;

  var datequary = `select date from check_master where reg_id='${login_user__id}' and date='${fulldate}';`;
  conn.query(datequary, function (err, data) {
    if (err) throw err;
    if (data.length == 0) {
      console.log("wrong");
    } else {
      query_date = data[0].date;
      if (query_date == fulldate) {
        var time = `select time from check_master where reg_id='${login_user__id}' and date='${fulldate}';`;
        console.log(time);
        conn.query(time, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
      } else {
        console.log("somthing went wrong!!!!!");
      }
    }
  });
};

module.exports = {abcGet,breakInGet,checkoutGet};
