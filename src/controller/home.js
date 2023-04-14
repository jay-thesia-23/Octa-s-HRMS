const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
var path = require("path");
app.set("layouts", path.resolve("src", "view", "layouts", "main")); //added

var conn = require("../config/dbConnect");
var jwt = require("jsonwebtoken");
var util = require("util");
var moment = require("moment");
const { log } = require("console");

var alldata = util.promisify(conn.query.bind(conn));



const d = new Date();
var x = d.getMonth() + 1;
var y = d.getDate();
var z = d.getFullYear();

var fulldate = y + "/" + x + "/" + z;


var homeGet = (req, res) => {

  var date = new Date();

  var currentmonth = date.getMonth();
  var cm = currentmonth + 1;

  const year = date.getFullYear();
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }

  const day = date.getDate();
  const x = year + "-" + month + "-" + day;


  conn.query(
    `select firstname,lastname,birth_date from employee_basic_infomation where birth_date = '${x}'; `,
    function (error, result) {
      if (error) throw error;
      //console.log(result);
      conn.query(
        `select holiday_name,holiday_date,holiday_month,holiday_day from holidays where holiday_month="${cm}"`,
        function (error, holidaydata) {
          jwt.verify(req.cookies.login_token, "sanjay", (err, decode) => {


            var login_id = decode.id[0].id;
            conn.query(
              `select count(*) as checkinCount from check_master where reg_id=${login_id} and status="check_in" ;`,
              (err, data) => {
                var attendaceCount = data[0].checkinCount;

                var totalHours = attendaceCount * 9;


                res.render("home.ejs", {
                  result,
                  date,
                  holidaydata,
                  attendaceCount,
                  totalHours,
                });
              }
            );
          });


        }
      );
    }
  );
};

var employeeActivityGet = async (req, res) => {
  var employee_check = await alldata(
    `select firstname,lastname,status,date,time from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where  check_master.date = '${fulldate}';`
  );

  var employee_breck = await alldata(
    `select firstname,lastname,status,date,time from employee_basic_infomation inner join breck_master on employee_basic_infomation.reg_id=breck_master.reg_id where  breck_master.date = '${fulldate}';`
  );
  var employee_activity = employee_check.concat(employee_breck);

  employee_activity.sort(function (a, b) {
    return new Date(a.time) - new Date(b.time)
  })
  res.json(employee_activity);
  // console.log(employee_activity +"employeeeeee");
};

var searchGet = async (req, res) => {
  var search = req.query.name || "";
  var f_name = "";
  var l_name = "";

  name_array = search.split(" ");

  f_name = name_array[0];
  f_name = f_name.substring(1);

  var l_name = name_array[1];


  var search_check = await alldata(
    `select firstname,lastname,status,date,time from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where  check_master.date = '${fulldate}' AND (employee_basic_infomation.firstname like '%${f_name}%' or employee_basic_infomation.lastname like '%${l_name}%' or employee_basic_infomation.firstname like '%${l_name}%' or employee_basic_infomation.lastname like '%${f_name}%') ;`
  );

  var search_breck = await alldata(
    `select firstname,lastname,status,date,time from employee_basic_infomation inner join breck_master on employee_basic_infomation.reg_id=breck_master.reg_id where  breck_master.date = '${fulldate}'  AND (employee_basic_infomation.firstname like '%${f_name}%' or employee_basic_infomation.lastname like '%${l_name}%' or employee_basic_infomation.firstname like '%${l_name}%' or employee_basic_infomation.lastname like '%${f_name}%');`
  );
  // console.log(search_breck);
  var search_result = search_check.concat(search_breck);

  res.json(search_result);
  // console.log(search_result);
};

var logoutPost = async (req, res) => {

  res.clearCookie("session_id");
  res.clearCookie("login_token");
  res.render("logout");
};




module.exports = {
  homeGet,
  searchGet,
  employeeActivityGet,
  logoutPost,

};
