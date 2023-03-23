const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added
var mysql2 = require("mysql2");
const util = require('util');
var jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser');
app.use(cookieParser());


const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hrms'
});

connection.connect(function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected database");
    }

});
var login_user__id

const d = new Date();
var x= d.getMonth() + 1;
var y = d.getDate();
var z= d.getFullYear();

var fulldate = y+"/"+x+"/"+z
console.log(fulldate);

var alldata = util.promisify(connection.query.bind(connection));

app.get('/hotline', async (req, res) => {

    var login_token=req.cookies.login_token
    jwt.verify(login_token, "sanjay", function (err, decoded) {
        login_user__id = decoded.id[0].id
        console.log(login_user__id)
    });

    var online = await alldata(`select count(reg_id) as total_online from check_master where date='${fulldate}' and online_status='1';`)
        var total_online = online[0].total_online
    console.log(total_online);

    var basicinfo = await alldata(`select firstname,lastname,email,phone_number,city,state,gender,zip_code,birth_date,address,relationship,designation,time_stamp from employee_basic_infomation`);

    // console.log(basicinfo);  

    var alldetails = await alldata(`select firstname,email,phone_number,designation,department,time_stamp from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.online_status='1';`)

    console.log(alldetails);
    console.log(alldetails.length);

    


    res.render('hotline.ejs', { basicinfo , total_online , alldetails });
});

module.exports = app