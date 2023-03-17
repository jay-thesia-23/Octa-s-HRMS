
var mysql2 = require('mysql2');
var express = require('express');

const path = require('path')


var bodyParser = require('body-parser');
const { response } = require('express');
var app = express();
app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const register = require('../hrms/routes/register')
app.use(register)
const login = require('../hrms/routes/login')
app.use(login)

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
    console.log("app listion on 5000 port");
})
