var express = require("express");
var ejs = require("ejs");
var path = require("path");
var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const util = require("util");
var bodyparser = require("body-parser");
var { loginGet, loginPost } = require("../controllers/login");

var router = express.Router();
var app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var mysql = require("mysql2");
app.use(cookieParser());
app.set("views", path.join(__dirname, "../views"));

var path = require("path");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hrms",
});

con.connect((err) => {
  if (err) throw err;
});


router.get("/login", loginGet);

router.post("/login", loginPost);

module.exports = router;
