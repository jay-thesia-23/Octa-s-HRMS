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

var total_online
var total_offline

const d = new Date();
var x = d.getMonth() + 1;
var y = d.getDate();
var z = d.getFullYear();

var fulldate = y + "/" + x + "/" + z;


var alldata = util.promisify(conn.query.bind(conn));




async function online_ofline() {
    var online = await alldata(`select count(reg_id) as total_online from check_master where date='${fulldate}' and online_status='1' and status = "check_in";`)
    total_online = online[0].total_online
}



async function online_ofline_1() {
    var on = [];
    var total = [];

    var alldetails_1 = await alldata(`select employee_basic_infomation.reg_id,firstname,email,phone_number,designation,department,time_stamp from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.online_status='1' and check_master.date = '${fulldate}' ; `);

    // console.log(alldetails);
    for (var k = 0; k < alldetails_1.length; k++) {
        on.push(alldetails_1[k].reg_id)
    }

    var total_emp = await alldata(`select employee_basic_infomation.reg_id,firstname,email,phone_number,designation,department,time_stamp from employee_basic_infomation`);

    for (var p = 0; p < total_emp.length; p++) {
        total.push(total_emp[p].reg_id)
    }

    var alldetails_off = [];


    for (var s = 0; s < total_emp.length; s++) {
        var reg = total_emp[s].reg_id;

        if (on.includes(reg)) {

        } else {

            var empl = await alldata(`select reg_id,firstname,email,phone_number,designation,department,time_stamp from employee_basic_infomation where reg_id = ${reg}`);

            alldetails_off.push(empl)
        }
    }


    total_offline = alldetails_off.length
}
const hotlineGet = async (req, res) => {
    total_online

    var login_token = req.cookies.login_token;
    jwt.verify(login_token, "sanjay", function (err, decoded) {
        login_user__id = decoded.id[0].id;

    });

    var alldetails = await alldata(
        `select firstname,email,phone_number,designation,department,time_stamp from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.online_status='1' and check_master.date = '${fulldate}' ;`
    );

    var alldetailsProfile = await alldata(`select profile_pic,reg_id from document_master`);


    online_ofline();

    online_ofline_1();




    res.render("hotline.ejs", { total_online, total_offline, alldetails, alldetailsProfile });
};

const hotlineOnlineGet = async (req, res) => {

    var alldetails = await alldata(
        `select employee_basic_infomation.reg_id,firstname,email,phone_number,designation,department,time_stamp from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.status='check_in' and check_master.online_status='1' and check_master.date = '${fulldate}' ; `
    );

    var alldetailsProfile = await alldata(`select profile_pic,reg_id from document_master`);


    online_ofline();
    online_ofline_1();



    res.render("hotline_online.ejs", { alldetails, total_online, total_offline, alldetailsProfile });
};

const hotlineOfflineGet = async (req, res) => {

    var on = [];
    var total = [];

    var alldetails_1 = await alldata(`select employee_basic_infomation.reg_id,firstname,email,phone_number,designation,department,time_stamp from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.online_status='1' and check_master.date = '${fulldate}' ; `);

    // console.log(alldetails);
    for (var k = 0; k < alldetails_1.length; k++) {
        on.push(alldetails_1[k].reg_id)
    }

    var total_emp = await alldata(`select employee_basic_infomation.reg_id,firstname,email,phone_number,designation,department,time_stamp from employee_basic_infomation`);

    for (var p = 0; p < total_emp.length; p++) {
        total.push(total_emp[p].reg_id)
    }

    var alldetails = [];


    for (var s = 0; s < total_emp.length; s++) {
        var reg = total_emp[s].reg_id;

        if (on.includes(reg)) {

        } else {

            var empl = await alldata(`select reg_id,firstname,email,phone_number,designation,department,time_stamp from employee_basic_infomation where reg_id = ${reg}`);

            alldetails.push(empl)
        }
    }

    total_offline = alldetails.length

    var alldetailsProfile = await alldata(`select * from document_master RIGHT JOIN employee_basic_infomation ON document_master.reg_id=employee_basic_infomation.reg_id;`);

    console.log(JSON.stringify(alldetailsProfile[0].profile_pic), "profilleeeeeeeee");

    online_ofline();

    res.render("hotline_offline.ejs", { alldetails, total_online, total_offline, alldetailsProfile });

};

module.exports = { hotlineGet, hotlineOfflineGet, hotlineOnlineGet };