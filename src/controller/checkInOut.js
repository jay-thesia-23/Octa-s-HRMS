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
var moment=require("moment")
app.use(cookieParser());

app.use(express.static("public"));
var conn = require("../config/dbConnect");

var login_user__id;

const tz = moment().utcOffset()
var checkInOutGet=function (req, res) {
    res.render("checkInOut.ejs");
  }


const d = new Date();
var x = d.getMonth() + 1;
var y = d.getDate();
var z = d.getFullYear();

var fulldate = y + "/" + x + "/" + z;


var checkInPost=function (req, res) {
    var login_token = req.cookies.login_token;
  
    jwt.verify(login_token, "sanjay", function (err, decoded) {
      login_user__id = decoded.id[0].id;
     
    });
  
    var check_in_entry = `insert into check_master (status,reg_id,date) values('check_in','${login_user__id}','${fulldate}');`;
   
  
    conn.query(check_in_entry, function (err, result) {
      if (err) throw err;
      res.json({ result });
    });
  
    var online_status = `update check_master set online_status='1' where reg_id = '${login_user__id}' and status = 'check_in'; `;
 
    conn.query(online_status, function (err, data1) {
      if (err) throw err;
      console.log("data update checkin");
    });
    // console.log("end point called");
  }

var checkOutPost=function (req, res) {
    var login_token = req.cookies.login_token;
    jwt.verify(login_token, "sanjay", function (err, decoded) {
      login_user__id = decoded.id[0].id;
      // console.log(login_user__id)
    });

    var check_out_entry = `insert into check_master (status,reg_id,date) values('check_out','${login_user__id}','${fulldate}');`;
    // console.log(check_out_entry)
  
    conn.query(check_out_entry, function (err, result) {
      if (err) throw err;
      res.json({ result });
    });
  
    var ofline_status = `update check_master set online_status='0' where reg_id = '${login_user__id}' and status = 'check_in'; `;
   
    conn.query(ofline_status, function (err, data1) {
      if (err) throw err;
      console.log("data update checkout");
    });
    // console.log("end point called");
  }

var breakOutPost=function (req, res) {
    var login_token = req.cookies.login_token;
    jwt.verify(login_token, "sanjay", function (err, decoded) {
      login_user__id = decoded.id[0].id;
      // console.log(login_user__id)
    });
 
    var check_out_entry = `insert into breck_master (status,reg_id,date) values('breck_out','${login_user__id}','${fulldate}');`;
   
  
    conn.query(check_out_entry, function (err, result) {
      if (err) throw err;
      res.json({ result });
    });
    // console.log("end point called");
  }

var breakInPost=function (req, res) {
    var login_token = req.cookies.login_token;
    jwt.verify(login_token, "sanjay", function (err, decoded) {
      login_user__id = decoded.id[0].id;
      // console.log(login_user__id)
    }); 
  
    console.log(login_user__id);
    var check_out_entry = `insert into breck_master (status,reg_id,date) values('breck_in','${login_user__id}','${fulldate}');`;
  
    conn.query(check_out_entry, function (err, result) {
      if (err) throw err;
      res.json({ result });
    });
  }

app.get("/token", function (req, res) {
  var test = req.cookies.login_token;
  
});

module.exports = {checkInOutGet,checkInPost,checkOutPost,breakInPost,breakOutPost};
