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


const register = require('./routes/register')
app.use(register)
const login = require('./routes/login')
app.use(login)
const demo = require('./routes/checkInOut')
app.use(demo)

app.use(express.static("public"));



const routes1 = require('./routes/home');
app.use(routes1);

const profile = require("./routes/profile");
app.use(profile);

const routes2 = require('./routes/attendance');
app.use(routes2);

const routes3 = require('./routes/hotline');
app.use(routes3);

var wizad = require("./routes/wizard");
app.use(wizad);

const leaves = require('./routes/leaves');
app.use(leaves);

var editprofile=require("./routes/edit_profile")
app.use(editprofile)

var fatchapi = require("./routes/check_module_fatchapi")
app.use(fatchapi)

var header=require("./routes/header")
app.use(header)





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
