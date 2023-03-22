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

const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added

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

app.get("/profile", (req, res) => {
  let sqlBasicInfo = `select * from employee_basic_infomation;`;
  let sqlEduInfo = `select * from education_table;`;
  let sqlExperienceInfo = `select * from experience_table;`;
  let sqlReferenceInfo = `select * from reference_master`;

  con.query(sqlBasicInfo, (err, dataBasic) => {
    con.query(sqlEduInfo, (err, dataEdu) => {
      con.query(sqlExperienceInfo, (err, dataExp) => {
        con.query(sqlReferenceInfo, (err, dataRef) => {
          console.log(dataBasic);
          console.log(dataEdu);
          res.render("profile", { basicdata: dataBasic, dataEdu, dataExp,dataRef });
        });
      });
    });
  });
});

module.exports = app;
