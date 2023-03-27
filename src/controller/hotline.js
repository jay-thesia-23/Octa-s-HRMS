const express = require("express");
const app = express(); //added
var mysql2 = require("mysql2");
const util = require("util");
var jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
app.use(cookieParser());

var conn = require("../config/dbConnect");
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added
var login_user__id;

const d = new Date();
var x = d.getMonth() + 1;
var y = d.getDate();
var z = d.getFullYear();

var fulldate = y + "/" + x + "/" + z;
console.log(fulldate);

var alldata = util.promisify(conn.query.bind(conn));
async function online_ofline() {
    var online = await alldata(`select count(reg_id) as total_online from check_master where date='${fulldate}' and online_status='1' and status = "check_in";`)
    total_online = online[0].total_online


    var offline = await alldata(`select count(reg_id) as total_offline from check_master where date='${fulldate}' and online_status='0' and status = "check_in";`)
    total_offline = offline[0].total_offline

}

online_ofline();



const hotlineGet = async (req, res) => {
  var login_token = req.cookies.login_token;
  jwt.verify(login_token, "sanjay", function (err, decoded) {
    login_user__id = decoded.id[0].id;
    console.log(login_user__id);
  });

  var alldetails = await alldata(
    `select firstname,email,phone_number,designation,department,time_stamp from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.online_status='1';`
  );

  console.log(alldetails);
  console.log(alldetails.length);

  res.render("hotline.ejs", { total_online, total_offline,alldetails });
};

const hotlineOnlineGet = async (req, res) => {
  console.log("sanjay online");
  var alldetails = await alldata(
    `select firstname,email,phone_number,designation,department from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.online_status='1' and check_master.date = '${fulldate}' ; `
  );

  console.log(alldetails);
  res.render("hotline_online.ejs", { alldetails, total_online, total_offline });
};

const hotlineOfflineGet = async (req, res) => {
  console.log("sanjay offline");
  var alldetails_off = await alldata(
    `select firstname,email,phone_number,designation,department from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.online_status='0' and check_master.status='check_in' and check_master.date = '${fulldate}' ;`
  );
  console.log(alldetails_off);
  res.render("hotline_offline.ejs", {
    alldetails_off,
    total_online,
    total_offline,

  });
};

module.exports = { hotlineGet,hotlineOfflineGet,hotlineOnlineGet };
