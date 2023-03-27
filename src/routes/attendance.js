const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added
var mysql2 = require("mysql2");
const util = require("util");
var jwt = require("jsonwebtoken");
var { attendanceGet } = require("../controller/attendance");
var path = require("path");

app.set("views", path.join(__dirname, "../views"));

app.get("/attendance", attendanceGet);

module.exports = app;
