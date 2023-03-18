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

app.get("/demo", function(req,res){
    res.render('checkInOut.ejs')
})

app.post('/check_in', function(err,res){


    
    // var sql=`select id from registration where u_email='${email}';`
    // console.log(sql);
    // con.query(sql, function(err,result){
    //     if(err) throw err
    //     id=result
    //     console.log(result)
    // })
    console.log("Ok!!!!!!!!!!!!!!!!!!!!!!!!!!");
})

app.get('/token',function(req,res){
    var test = req.cookies.login_token
    console.log(test);
})

module.exports = app