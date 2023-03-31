const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
app.set('layout', '../views/layouts/main') //added
var mysql = require('mysql2');
var path=require("path")
app.set("views",path.join(__dirname,"../views"))
var router=express.Router()
var {forgotpasschangeget, forgotpasschangepost}=require("../controller/forgotpasschange")

var {authentication}=require("../middleware/authMiddleware")

app.get("/forgotPassChange",authentication,forgotpasschangeget)
app.post("/forgotPassChange",authentication,forgotpasschangepost)

module.exports=app