var express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
var bodyparser = require("body-parser");
var mysql = require("mysql2");
var path = require("path");
var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
var {
  registerGet,
  Inemail,
  cloneEmailPost,
  registerPost,
  verifyGet,
} = require("../controllers/register");

const nodemailer = require("nodemailer");
var app = express();
app.use(express.static("css"));
app.use(express.static("images"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.set("views", path.join(__dirname, "../views"));
app.use("/public", express.static("public"));

var router = express.Router();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hrms",
});
con.connect((err) => {
  if (err) throw err;
});

router.get("/register", registerGet);

router.post("/clone-email", cloneEmailPost);

router.post("/register", registerPost);

router.get("/verify", registerPost);

module.exports = router;
