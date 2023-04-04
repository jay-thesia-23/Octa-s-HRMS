var mysql = require("mysql2");
var express = require("express");
var path = require("path");
var app = express();
app.set("view engine", "ejs");
var multer=require("multer")
var bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var cookieParser = require("cookie-parser");
app.use(cookieParser());
// var jwt = require("jsonwebtoken");

// var multer = require("multer");

var jwt = require("jsonwebtoken");
var router=express.Router()

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hrms",
});

con.connect((err) => {
  if (err) throw err;
  
});

function uploads(){
    
}

var uniqueSuffix = "";
const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, files, cb) {
    uniqueSuffix = `${Date.now()}-${files.originalname}`;
  
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });


module.exports={upload}
