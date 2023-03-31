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
var bcrypt=require("bcrypt")
var conn=require("../config/dbConnect")

var forgotpasschangeget=(req,res)=>{
    res.render("forgotPassChange",{layout:false})
}

var forgotpasschangepost=async (req,res)=>{

    var newpass=req.body.newpass
    var confnewpass=req.body.conpass
    var email=req.body.email

    console.log(req.body);

    let encrypt_password;
    encrypt_password = await bcrypt.hash(newpass, 10);


    let sql=`update registration 
    set u_password="${encrypt_password}"
    where u_email="${email}";`

    console.log(sql);
    
    conn.query(sql,(err,data)=>{
        res.send("password is change")
    })

 
}


module.exports={forgotpasschangeget,forgotpasschangepost}