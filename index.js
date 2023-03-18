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

app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added
app.use(express.static('public'));

const register = require('../hrms/routes/register')
app.use(register)
const login = require('../hrms/routes/login')
app.use(login)

const dashboard = require('../hrms/routes/dashboard');
app.use(dashboard);

var wizad=require("../hrms/routes/wizard")
app.use(wizad)


// Routes
const routes1 = require('../hrms/routes/routes');
app.use(routes1);




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
