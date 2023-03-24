const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts); //Added
app.set('layout', './layouts/main'); //added
var mysql2 = require("mysql2");
const util = require('util');
var jwt = require("jsonwebtoken");
var path=require('path')
var {attendance}=require("../controllers/attendance")
app.set("views",path.join(__dirname,"../views"))

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
 
});

var alldataquery = util.promisify(connection.query.bind(connection));

app.get('/attendance',attendance )

// function diffrence_time(entry_time, exit_time) {


//     var h1, h2, m1, m2, s1, s2;
//     h1 = entry_time.slice(0, 2);
//     h2 = exit_time.slice(0, 2);
//     m1 = entry_time.slice(3, 5);
//     m2 = exit_time.slice(3, 5);
//     s1 = entry_time.slice(6);
//     s2 = exit_time.slice(6);

//     var h = h2 - h1;
//     var m = m2 - m1;
//     var s = s2 - s1;

//     var totalsec = (h - 1) * 60 * 60 + m * 60 + s;

//     var working = Math.floor((totalsec * 100) / (9 * 60 * 60));

//     return working;
// }

module.exports = app