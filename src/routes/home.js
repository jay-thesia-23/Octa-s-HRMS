const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
app.set('layout', '../views/layouts/main') //added
var mysql = require('mysql2');
var path=require("path")
app.set("views",path.join(__dirname,"../views"))
var router=express.Router()
var {homeGet}=require("../controller/home")

var {authentication}=require("../middleware/authMiddleware")

app.get('/home',authentication, homeGet)

module.exports = app