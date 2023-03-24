var express = require('express');
var app = express();
app.use(express.json());
var ejs = require('ejs');

const bcrypt = require('bcrypt');


app.use(express.static('css'));
app.use(express.static('images'));

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var mysql = require('mysql2');

var cookieParser = require('cookie-parser');
// app.use(cookieParser());
var jwt = require('jsonwebtoken')

app.use(cookieParser());

app.use(express.static("public"));

var login_user__id

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hrms'
});
con.connect((err) => {
    if (err) throw err;
});

app.get("/demo", function (req, res) {
    res.render('checkInOut.ejs')
})

const d = new Date();
var x= d.getMonth() + 1;
var y = d.getDate();
var z= d.getFullYear();

var fulldate = y+"/"+x+"/"+z
console.log(fulldate);

app.post('/check_in', function (req, res) {
    var login_token = req.cookies.login_token

    jwt.verify(login_token, "sanjay", function (err, decoded) {
        login_user__id = decoded.id[0].id
        // console.log(login_user__id)
    });

    var check_in_entry = `insert into check_master (status,reg_id,date) values('check_in','${login_user__id}','${fulldate}');`
    console.log(check_in_entry);

    con.query(check_in_entry, function (err, result) {
        if (err) throw err
        res.json({ result })

    })

    var online_status = `update check_master set online_status='1' where reg_id = '${login_user__id}' and status = 'check_in'; `
    console.log(online_status);
        con.query(online_status , function(err,data1){
            if(err) throw err
            console.log("data update checkin");
        })
    // console.log("end point called");
})

app.post('/check_out', function (req, res) {
    var login_token = req.cookies.login_token
    jwt.verify(login_token, "sanjay", function (err, decoded) {
        login_user__id = decoded.id[0].id
        // console.log(login_user__id)
    });
    
        console.log(login_user__id);
    var check_out_entry = `insert into check_master (status,reg_id,date) values('check_out','${login_user__id}','${fulldate}');`
    // console.log(check_out_entry)
    
    con.query(check_out_entry, function (err, result) {
        if (err) throw err
        res.json({ result })
    })

    var ofline_status = `update check_master set online_status='0' where reg_id = '${login_user__id}' and status = 'check_in'; `
    console.log(ofline_status);
        con.query(ofline_status , function(err,data1){
            if(err) throw err
            console.log("data update checkout");
        })
    // console.log("end point called");
})

app.post('/breck_out', function (req, res) {
    var login_token = req.cookies.login_token
    jwt.verify(login_token, "sanjay", function (err, decoded) {
        login_user__id = decoded.id[0].id
        // console.log(login_user__id)
    });
    console.log(login_user__id);
var check_out_entry = `insert into breck_master (status,reg_id,date) values('breck_out','${login_user__id}','${fulldate}');`
// console.log(check_out_entry)

con.query(check_out_entry, function (err, result) {
    if (err) throw err
    res.json({ result })
})
// console.log("end point called");
})

app.post('/breck_in', function (req, res) {
    var login_token = req.cookies.login_token
    jwt.verify(login_token, "sanjay", function (err, decoded) {
        login_user__id = decoded.id[0].id
        // console.log(login_user__id)
    });
    
    console.log(login_user__id);
var check_out_entry = `insert into breck_master (status,reg_id,date) values('breck_in','${login_user__id}','${fulldate}');`

con.query(check_out_entry, function (err, result) {
    if (err) throw err
    res.json({ result })
})
})



app.get('/token', function (req, res) {
    var test = req.cookies.login_token
    // console.log(test);
})

module.exports = app