var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var util = require("util");
var conn  = require("../config/dbConnect");
const { log } = require("console");

var sqlquery = util.promisify(conn.query).bind(conn);

var showProfileGet =async (req, res) => {
  var id = req.query.id;

  let sqlBasicInfo = `select * from employee_basic_infomation where reg_id=${id} ;`;
  let sqlEduInfo = `select * from education_table where reg_id=${id};`;
  let sqlProfilePic = `select * from document_master where reg_id=${id}; `;

  var dataBasic =await sqlquery(sqlBasicInfo);
  var dataEdu = await sqlquery(sqlEduInfo);
  var datapic = await sqlquery(sqlProfilePic);

  console.log(dataBasic,"basic");
  console.log(dataEdu,"edu");
  console.log(datapic,"pic");

  res.render("showProfile", {
    basicdata: dataBasic,
    dataEdu,
    datapic,
  });
};

module.exports = { showProfileGet };
