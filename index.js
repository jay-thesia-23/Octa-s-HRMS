var express = require('express');
var bodyparser=require('body-parser')
var mysql2 = require('mysql2');
var app = express();
app.use(express.json());

const { query } = require('express');
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static('public'));

const register = require('../hrms/routes/register')
app.use(register)
const login = require('../hrms/routes/login')
app.use(login)

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

var wizad=require("../hrms/routes/wizard")
app.use(wizad)


var connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hrms'
  
  });
  
  connection.connect((err) => {
    if (err)
      throw err;
    console.log("connected with database");
  })
  
  
  
  




app.listen(5000, () => {
    console.log("app listening on 5000 port");
})
