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

    var email=req.query.email

    let login_token=jwt.sign({ email: email },"sanjay")
    res.cookie("login_token",login_token)
    res.render("forgotPassChange",{email,layout:false})
}

var forgotpasschangepost=async (req,res)=>{


    var newpass=req.body.newpass
    var confnewpass=req.body.conpass
   
    let token=req.cookies.login_token

    let emailVerify;
    jwt.verify(token,"sanjay",(err,decoded)=>{

        emailVerify=decoded.email

    })
    if(newpass!=confnewpass){
        res.send("password and confirm password is not same")
    }

    let encrypt_password;
    encrypt_password = await bcrypt.hash(newpass, 10);


    let sql=`update registration 
    set u_password="${encrypt_password}"
    where u_email="${emailVerify}";`

   console.log(sql,"sql");
    conn.query(sql,(err,data)=>{
        res.redirect("/login")
    })

 
}


module.exports={forgotpasschangeget,forgotpasschangepost}