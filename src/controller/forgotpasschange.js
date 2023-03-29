var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine', 'ejs')
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added
var jwt = require("jsonwebtoken");

var forgotpassget=(req,res)=>{
    res.render("forgotPassChange")
}


module.exports={forgotpassget}