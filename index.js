const express = require('express');
const mysql = require('mysql2');
const bodyparser = require('body-parser');
const app = express();
const ejs = require('ejs');
const util=require('util');
// const bcryptjs = require("bcryptjs");
// const jwt=require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
const { query } = require('express');
app.use(express.static("public"));

//routes
const routes = require('../hrms/routes/profile');
app.use(routes);

const routes2 = require('../hrms/routes/dashboard');
app.use(routes2);


app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/wizard',(req,res)=>{
    res.render('wizard.ejs');
});

app.get('/attendance',(req,res)=>{
    res.render('attendance.ejs');
});

app.get('/hotline',(req,res)=>{
    res.render('hotline.ejs');
});

app.listen(7070, (err) => {
    console.log('server connected at 7070');
});
