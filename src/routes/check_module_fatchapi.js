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

app.get("/abc", abcGet);

app.get("/brc_in", checkoutGet);

app.get("/chk_out", breakInGet);

module.exports = app;
