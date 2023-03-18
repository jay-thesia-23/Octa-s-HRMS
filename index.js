var express = require('express');
var bodyparser=require('body-parser')
var app = express();
app.use(express.json());

const { query } = require('express');
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


const register = require('../hrms/routes/register')
app.use(register)
const login = require('../hrms/routes/login')
app.use(login)
const profile = require('../hrms/routes/profile');
app.use(profile);
const dashboard = require('../hrms/routes/dashboard');
app.use(dashboard);


app.get('/wizard',(req,res)=>{
    res.render('wizard.ejs');
});

app.get('/attendance',(req,res)=>{
    res.render('attendance.ejs');
});

app.get('/hotline',(req,res)=>{
    res.render('hotline.ejs');
});

app.listen(5000, () => {
    console.log("app listening on 5000 port");
})
