var express = require("express");
var bodyparser = require("body-parser");
var mysql2 = require("mysql2");
var app = express();
app.use(express.json());

const { query } = require("express");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


app.use(express.static("public"));


const routes1 = require('../hrms/routes/home');
app.use(routes1);

const profile = require("../hrms/routes/profile");
app.use(profile);

const routes2 = require('../hrms/routes/attendance');
app.use(routes2);

const routes3 = require('../hrms/routes/hotline');
app.use(routes3);

var wizad = require("../hrms/routes/wizard");
app.use(wizad);

const demo = require('./routes/checkInOut')
app.use(demo)

const leaves = require('../hrms/routes/leaves');
app.use(leaves);

var editprofile=require("../hrms/routes/edit_profile")
app.use(editprofile)


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
});
