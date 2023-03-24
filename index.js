var express = require("express");
var bodyparser = require("body-parser");
var mysql2 = require("mysql2");
var ejs=require("ejs")
var path=require("path")

var app = express();

app.use(express.json());
app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs");

app.use(express.static("public"));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));



const register = require("./src/routes/register");
app.use(register);

const login = require("./src/routes/login");
app.use(login);

const demo = require("./src/routes/checkInOut");
app.use(demo);

const routes1 = require("./src/routes/home");
app.use(routes1);

const profile = require("./src/routes/profile");
app.use(profile);

const routes2 = require("./src/routes/attendance");
app.use(routes2);

const routes3 = require("./src/routes/hotline");
app.use(routes3);

var wizad = require("./src/routes/wizard");
app.use(wizad);

const leaves = require("./src/routes/leaves");
app.use(leaves);

var editprofile = require("./src/routes/edit_profile");
app.use(editprofile);

var fatchapi = require("./src/routes/check_module_fatchapi");
app.use(fatchapi);

var header = require("./src/routes/header");
app.use(header);

var connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hrms",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected with database");
});

app.listen(5000, () => {
  console.log("app listening on 5000 port");
});
