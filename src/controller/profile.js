var express = require("express");
var app = express();
app.use(express.json());
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added

app.use(cookieParser());

var conn = require("../config/dbConnect");

var profileGet = (req, res) => {

  let login_token = req.cookies.login_token;
  var id;
  console.log(login_token, "token in profile");
  jwt.verify(login_token, "sanjay", (err, decoded) => {
    console.log(decoded, "decoded");

    id = decoded.id[0].id;
  });

  let sqlBasicInfo = `select * from employee_basic_infomation where reg_id=${id} ;`;
  let sqlEduInfo = `select * from education_table where reg_id=${id};`;
  let sqlExperienceInfo = `select * from experience_table where reg_id=${id};`;
  let sqlReferenceInfo = `select * from reference_master where reg_id=${id};`;
  let sqlProfilePic = `select * from document_master where reg_id=${id}; `;

  console.log(sqlProfilePic, "sql of pic");
  conn.query(sqlBasicInfo, (err, dataBasic) => {
    conn.query(sqlEduInfo, (err, dataEdu) => {
      conn.query(sqlExperienceInfo, (err, dataExp) => {
        conn.query(sqlReferenceInfo, (err, dataRef) => {
          conn.query(sqlProfilePic, (err, datapic) => {
            console.log(datapic, "datapic");
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
};

let profilePost = (req, res) => {
  const login_token = req.cookies.login_token;
  
  console.log(login_token);

  jwt.verify(login_token, "sanjay", (err, decoded) => {
    console.log(decoded);
  });
};

module.exports = {profileGet,profilePost};
