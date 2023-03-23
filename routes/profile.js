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
  let login_token = req.cookies.login_token;
  var id;
  console.log(login_token, "token in profile");
  jwt.verify(login_token, "sanjay", (err, decoded) => {
    console.log(decoded, "decoded");

  
    id = decoded.id[0].id;
  });

  let sqlBasicInfo = `select * from employee_basic_infomation ;`;
  let sqlEduInfo = `select * from education_table;`;
  let sqlExperienceInfo = `select * from experience_table;`;
  let sqlReferenceInfo = `select * from reference_master`;
  let sqlProfilePic = `select * from document_master where id=${id}; `;

  console.log(sqlProfilePic,"sql of pic");
  con.query(sqlBasicInfo, (err, dataBasic) => {
    con.query(sqlEduInfo, (err, dataEdu) => {
      con.query(sqlExperienceInfo, (err, dataExp) => {
        con.query(sqlReferenceInfo, (err, dataRef) => {
          con.query(sqlProfilePic, (err, datapic) => {
            console.log(datapic,"datapic");
            res.render("profile", {
              basicdata: dataBasic,
              dataEdu,
              dataExp,
              dataRef,
              datapic,
            });
          });
        });
      });
    });
  });
});

app.post("/profile", (req, res) => {});

module.exports = app;


// CREATE TABLE `document_master` (
//   `document_id` int NOT NULL AUTO_INCREMENT,
//   `employee_id` int NOT NULL,
//   `id` int NOT NULL,
//   `adhar` varchar(500) NOT NULL,
//   `resume_doc` varchar(500) NOT NULL,
//   `cheque` varchar(500) NOT NULL,
//   `other` varchar(500) NOT NULL,
//   `profile_pic` varchar(500) NOT NULL,
//   PRIMARY KEY (`document_id`),
//   KEY `fk_document_master_1_idx` (`employee_id`),
//   KEY `fk_document_master_2_idx` (`id`),
//   CONSTRAINT `fk_document_master_1` FOREIGN KEY (`employee_id`) REFERENCES `employee_basic_infomation` (`employee_id`),
//   CONSTRAINT `fk_document_master_2` FOREIGN KEY (`id`) REFERENCES `registration` (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
