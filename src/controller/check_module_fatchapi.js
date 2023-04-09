const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added
var moment=require("moment")
var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");

app.use(cookieParser());
var conn = require("../config/dbConnect");

// let momentOne = moment();
// var tz=momentOne.utcOffset(330);

// console.log(momentOne,"oneeeeeeeeeeeeee");

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

 
  var datequary = `select date from check_master where reg_id='${login_user__id}' and date='${fulldate}' and status='check_in';`;
  conn.query(datequary, function (err, data) {
    if (err) throw err;
    console.log(data.length);
    if (data.length == 0) {
      console.log("wrong");
    } else {
     
      query_date = data[0].date;
    
      if (query_date == fulldate) {
        var time = `select time from check_master where reg_id='${login_user__id}' and date='${fulldate}' and status='check_in';`;
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

  console.log(fulldate,"checkout full date");
  var datequary = `select date from check_master where reg_id='${login_user__id}' and date='${fulldate}' and status='check_out';`;
  conn.query(datequary, function (err, data) {
    if (err) throw err;
    if (data.length == 0) {
      console.log("wrong");
    } else {
      query_date = data[0].date;


      if (query_date == fulldate) {
        var time = `select time from check_master where reg_id='${login_user__id}' and date='${fulldate}'
         and status='check_out';`;
      
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

module.exports = { abcGet, breakInGet, checkoutGet };