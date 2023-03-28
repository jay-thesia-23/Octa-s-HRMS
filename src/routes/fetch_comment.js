const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "../views/layouts/main");
var mysql2 = require("mysql2");
const util = require("util");
var jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
app.use(cookieParser());
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); 
var path = require("path");
app.set("views", path.join(__dirname, "../views"));

var router = express.Router();
var conn = require("../config/dbConnect");
var {
  fetchcommentGet,
  
} = require("../controller/fetch_comment");

var router = express.Router();

//var { authentication } = require("../middleware/authMiddleware");

app.get("/fetch_comment", fetchcommentGet);


module.exports = app