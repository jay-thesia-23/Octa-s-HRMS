const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
var path=require("path")
app.set('layouts', path.resolve("src","view","layouts","main")) //added

var conn=require("../config/dbConnect")

var util=require("util");
const { JsonWebTokenError } = require('jsonwebtoken');
var alldata = util.promisify(conn.query.bind(conn));

const d = new Date();
var x = d.getMonth() + 1;
var y = d.getDate();
var z = d.getFullYear();

var fulldate = y + "/" + x + "/" + z


var forgotPassGet=(req,res)=>{
    res.render("forgotPass",{layout:false})
}

var forgotPassPost=(req,res)=>{
console.log(req.body);

var email=req.body.email
console.log(email);
}

module.exports={forgotPassGet,forgotPassPost}