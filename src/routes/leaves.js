var mysql = require("mysql2");
var express = require("express");
var app = express();
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added
var jwt = require("jsonwebtoken");
var {leaveGet,leavePost,leave_editGet,update_leavePost,leave_approvePost,leave_cancelPost}=require("../controller/leaves")
var path=require("path")
app.set("views",path.join(__dirname,"../views"))
var {authentication}=require("../middleware/authMiddleware")
app.get("/leaves",authentication, leaveGet);

app.post("/leaves",authentication,leavePost);
app.get("/leave_edit",authentication,leave_editGet);
app.post("/update_leaves",authentication,update_leavePost);
app.post("/leave_approve",authentication,leave_approvePost);
app.post("/leave_cancel",authentication,leave_cancelPost);





module.exports = app;
