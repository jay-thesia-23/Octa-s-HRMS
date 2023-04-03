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
var nodemailer=require("nodemailer")

var forgotPassGet=(req,res)=>{
    res.render("forgotPass",{layout:false})
}

var forgotPassPost=(req,res)=>{
console.log(req.body);

var email=req.body.email

const transporter = nodemailer.createTransport({
    service: "gmail",
    to: "sanjayparmar1650@gmail.com",

    auth: {
      user: "hrms1650@gmail.com",
      pass: "vymm mlia vhln fuze",
    },
  });



const mailConfigurations = {
    // const login_token = jwt.sign({ email: email }, "sanjay");
    // res.cookie("login_token", login_token);

    to: "sanjayparmar1650@gmail.com",

    subject: "Email Verification",

    html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .heading{
        text-align: center;
        padding: 30px;
      }
      .main{
        border: 2px solid black;
        height: auto;
        width: 80%;
        border-radius: 10px;
        background-color: #f5f5f5;
      }
      .verify-link{
        align-items: center;
        border: 3px solid rgb(55, 168, 206);
        background-color: rgb(197, 187, 197);
        border-radius: 30px;
        padding: 2px;
        text-align: center;
        width: 100px;
        text-decoration: none;
        margin-bottom: 20px;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 30px
        
        
      }
      a:link{
        text-decoration: none;
        font-size: 30px;
         
      }
      .verify-link:hover {
        background-color: #dfdfdf;
      }
    
      .section-p{
        text-align: center;
        padding: 10px;
      } 
        </style>
    </head>
    
    <body>
        <div class="main">
            <header>
                <div class="heading">
                    <h1>Confirm Your Employe</h1>
                </div>
            </header>
         <section class="section">
            <div class="section-p">
                <p>Tap the button below to confirm your Employe.</p>
            </div>
            <div class="verify-link">
                <a href=" ${req.get('origin')}/forgotPassChange?email=${email} "> verify</a>
            </div>
        </section>
       
        </div>
    </body>
    
    </html>`,
  };

  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) throw Error(error);
    console.log("Email Sent Successfully");
    // console.log(info);
  });

  res.send("Change password mail sent Successfully!!!!");
};






module.exports={forgotPassGet,forgotPassPost}