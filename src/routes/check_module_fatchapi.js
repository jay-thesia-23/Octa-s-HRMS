const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added


var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
app.use(cookieParser());
app.use(express.static("public"));

var {
  abcGet,
  checkoutGet,
  breakInGet,
} = require("../controller/check_module_fatchapi");

var {authentication}=require("../middleware/authMiddleware")
app.get("/abc",authentication, abcGet);

app.get("/brc_in",authentication, breakInGet );

app.get("/chk_out",authentication, checkoutGet);

module.exports = app;
