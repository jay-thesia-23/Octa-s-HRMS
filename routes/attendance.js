const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts); //Added
app.set('layout', './layouts/main'); //added
var mysql2 = require("mysql2");
const util = require('util');
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

var alldataquery = util.promisify(connection.query.bind(connection));

app.get('/attendance', async (req, res) => {



    var token = req.cookies.login_token;
    var id ;
    console.log(token + "tokennnnnnnnnnnnnnnn");
  
    jwt.verify(token, "sanjay", function (err, decoded) {
    
        id = decoded.id[0].id;
        console.log(id+"iddd");
    })



var checkdata = await alldataquery(`select id,status,time from check_master where reg_id = '${id}';`);




var starttime = [];
var startdate = [];
var exittime = [];
var progress = [];


for (let i = 0; i < checkdata.length; i++) {

if (checkdata[i].status == "check_in") {
startdate.push(checkdata[i].time.toJSON('yyyy-mm-dd').slice(0, 10));
var start = checkdata[i].time.toJSON('HH:MM:SS').slice(11, 18);
var start_time_h = start.slice(0,2);
var start_time_m = start.slice(3,5);


var star_time = start_time_h +":"+ start_time_m

starttime.push(star_time);
} else {
    var end = checkdata[i].time.toJSON('HH:MM:SS').slice(11, 18);
    var end_time_h = end.slice(0,2);
    var end_time_m = end.slice(3,5);

    
    var end_time = end_time_h +":"+ end_time_m
exittime.push(end_time);
}
}
console.log(starttime.push(checkdata[0].time.toJSON('HH-1:MM:SS').slice(11, 18)));

for (let i = 0; i < starttime.length; i++) {
if (exittime[i]) {

progress.push(diffrence_time(starttime[i], exittime[i]));
} else {
progress.push(0); 
}
}
res.render('attendance', { starttime, exittime, startdate, progress});
})

function diffrence_time(entry_time, exit_time) {


var h1, h2, m1, m2, s1, s2;
h1 = entry_time.slice(0, 2);
h2 = exit_time.slice(0, 2);
m1 = entry_time.slice(3, 5);
m2 = exit_time.slice(3, 5);
s1 = entry_time.slice(6);
s2 = exit_time.slice(6);

var h = h2 - h1;
var m = m2 - m1;
var s = s2 - s1;

var totalsec = (h - 1) * 60 * 60 + m * 60 + s;

var working = Math.floor((totalsec * 100) / (9 * 60 * 60));

return working;
}

module.exports = app

