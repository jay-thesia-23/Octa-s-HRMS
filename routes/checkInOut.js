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

app.use("/public", express.static("public"));

var login_user__id

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hrms'
});
con.connect((err) => {
    if (err) throw err;
    console.log(" database connected ")
});

app.get("/demo", function (req, res) {
    res.render('checkInOut.ejs')
})

app.post('/check_in', function (req, res) {
    var login_token = req.cookies.login_token

    jwt.verify(login_token, "sanjay", function (err, decoded) {
        login_user__id = decoded.id[0].id
        // console.log(login_user__id)
    });

    var check_in_entry = `insert into check_master (status,reg_id) values('check_in','${login_user__id}');`
    console.log(check_in_entry);

    con.query(check_in_entry, function (err, result) {
        if (err) throw err
        res.json({ result })

    })
    // console.log("end point called");
})

app.post('/check_out', function (req, res) {
    
        console.log(login_user__id);
    var check_out_entry = `insert into check_master (status,reg_id) values('check_out','${login_user__id}');`
    // console.log(check_out_entry)

    con.query(check_out_entry, function (err, result) {
        if (err) throw err
        res.json({ result })
    })
    // console.log("end point called");
})

app.post('/breck_out', function (req, res) {
    
    console.log(login_user__id);
var check_out_entry = `insert into check_master (status,reg_id) values('breck_out','${login_user__id}');`
// console.log(check_out_entry)

con.query(check_out_entry, function (err, result) {
    if (err) throw err
    res.json({ result })
})
// console.log("end point called");
})

app.post('/breck_in', function (req, res) {
    
    console.log(login_user__id);
var check_out_entry = `insert into check_master (status,reg_id) values('breck_in','${login_user__id}');`

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