const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);   //Added
app.set('layout', './layouts/main'); //added
var mysql2 = require("mysql2");
const util = require('util');

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
    // var id=req.query.id;
    var checkdata = await alldataquery(`select id,status,time from check_master`);
    var starttime = [];
    var startdate = [];
    var exittime = [];
    var progress = [];


    for (let i = 0; i < checkdata.length; i++) {

        if (checkdata[i].status == "check_in") {
            startdate.push(checkdata[i].time.toJSON('yyyy-mm-dd').slice(0, 10));
            starttime.push(checkdata[i].time.toJSON('HH:MM:SS').slice(11, 18));
        } else {
            exittime.push(checkdata[i].time.toJSON('HH:MM:SS').slice(11, 18));
        }
    }

    for (let i = 0; i < starttime.length; i++) {
        if (exittime[i]) {

            progress.push(diffrence_time(starttime[i], exittime[i]));
        } else {
            progress.push(0);
        }
    }
    // console.log(checkdata);
    // console.log(progress);
    //     console.log("start",starttime);
    //     console.log("exit",exittime);
    //     console.log("date",startdate);


    res.render('attendance', { starttime, exittime, startdate, progress });
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

