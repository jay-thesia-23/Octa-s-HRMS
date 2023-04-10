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

var leaveGet = (req, res) => {

  var data = [];
  var count;
  var curr_page;
  page = req.query.num || 1;
  curr_page = parseInt(req.query.num);
  limit = 3;
  offset = (page - 1) * limit;
  if (isNaN(offset)) {
    offset = 0;
  }
 
let totalp;
  var login_token = req.cookies.login_token;

  jwt.verify(login_token, "sanjay", function (err, decoded) {
    // console.log(decoded);
    id = decoded.id[0].id;

    conn.query(`select count(*) as numrows  from request_leave_table where reg_id = "${id}"`, (error, result) => {
      if (error) throw error;
      data[0] = result[0].numrows;
      count = Math.ceil(data[0] / limit);
      // totalp = Math.ceil(result[0].count / limit);
      console.log(count);
  
    });
  
    conn.query(
      `select *from request_leave_table  where reg_id = "${id}" LIMIT ${offset},${limit} `,
      (error, result) => {
        if (error) {
          throw error;
        }
        data = result;
        
        res.render("leaves", { data,  
          pagearray: count,count: count , curr_page });
         //console.log(pid,"pidddhusfuisd");
      }
    );
  });
  //res.render('leaves');
};

var leavePost = (req, res) => {

  
  var login_token = req.cookies.login_token;
  

  jwt.verify(login_token, "sanjay", function (err, decoded) {
  
    let ldate = req.body.ldate;
    let leavetype = req.body.leavetype;
    let reason = req.body.reason;
   

    //date
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;


    var id = decoded.id[0].id;
  

    var sql = `INSERT INTO request_leave_table(reg_id,leave_category,request_date,leave_date,leave_reason) VALUES ("${id} ","${leavetype} ","${today} ","${ldate}","${reason}")`;

    conn.query(sql, function (err, result) {
      if (err) throw err;
     
    });
  });
  res.redirect("/leaves");
};

var leave_editGet = (req, res) => {

  console.log(req.query.request_id,"aaaaaaa");
  var request_id = req.query.request_id;

  var sql = `select * from request_leave_table where request_id = '${request_id}' `;

    conn.query(sql, function (err, result_edit) {
      if (err) throw err;
      res.json(result_edit)
      // res.render("leaves_edit", { result_edit });
      // console.log(result); 
    });

};


var update_leavePost = (req, res) => {

  console.log(req.body);
  // var request_id = req.query.request_id;

  // var sql = `select * from request_leave_table where request_id = '${request_id}' `;

  //   conn.query(sql, function (err, result_edit) {
  //     if (err) throw err;
  //     res.json(result_edit)
  //     // res.render("leaves_edit", { result_edit });
  //     // console.log(result); 
  //   });

};

module.exports ={ leavePost, leaveGet,leave_editGet,update_leavePost}; 
 
