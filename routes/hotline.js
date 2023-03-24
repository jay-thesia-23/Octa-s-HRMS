var mysql2 = require("mysql2");
var express = require("express");
var app = express();
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
const { response } = require("express");
const util = require("util")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added
var jwt = require("jsonwebtoken");


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
var x = d.getMonth() + 1;
var y = d.getDate();
var z = d.getFullYear();

var fulldate = y + "/" + x + "/" + z

var total_online;
var total_offline;


var alldata = util.promisify(connection.query.bind(connection));


async function online_ofline() {
    var online = await alldata(`select count(reg_id) as total_online from check_master where date='${fulldate}' and online_status='1' and status = "check_in";`)
    total_online = online[0].total_online


    var offline = await alldata(`select count(reg_id) as total_offline from check_master where date='${fulldate}' and online_status='0' and status = "check_in";`)
    total_offline = offline[0].total_offline

}

online_ofline();

app.get('/hotline', async (req, res) => {




    var alldetails = await alldata(`select firstname,email,phone_number,designation,department from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.online_status='1' and check_master.date = '${fulldate}' ;`)

    // var alldetails_off = await alldata(`select firstname,email,phone_number,designation,department from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.online_status='0' and check_master.status='check_in' ;`)

    res.render('hotline.ejs', { alldetails, total_online, total_offline });
});

app.get('/hotline/online', async (req, res) => {

    
    console.log("sanjay online");
    var alldetails = await alldata(`select firstname,email,phone_number,designation,department from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.online_status='1' and check_master.date = '${fulldate}'  ;`)

    console.log(alldetails);
    res.render('hotline_online.ejs', { alldetails, total_online, total_offline });
});
app.get('/hotline/offline', async (req, res) => {

    console.log("sanjay offline");
    var alldetails_off = await alldata(`select firstname,email,phone_number,designation,department from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where check_master.online_status='0' and check_master.status='check_in' and check_master.date = '${fulldate}' ;`)
    console.log(alldetails_off);
    res.render('hotline_offline.ejs', { alldetails_off, total_online, total_offline });
});


module.exports = app