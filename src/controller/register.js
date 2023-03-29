var express = require("express");

var app=express()
const session = require("express-session");
const bcrypt = require("bcrypt");
var bodyparser = require("body-parser");
var mysql = require("mysql2");
var path = require("path");
var cookieParser = require("cookie-parser");
app.use(cookieParser());
var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
var path = require("path");
var conn=require("../config/dbConnect")

app.use(express.static("public"));
app.set("views",path.join(__dirname,"../views"));

// app.use(
//   session({
//     name:"session_id",
//     secret: "your-secret-key",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24,
//     },
//   })
// );



var registerGet = function (req, res) {
  res.render("register.ejs", {});
};

async function Inemail(email) {
  return await new Promise((resolve, reject) => {
    conn.query(
      `select * from registration where u_email='${email}';`,
      (err, data) => {
        if (err) throw err;
        resolve(data);
        // connsole.log(data.length);
      }
    );
  });
}

var cloneEmailPost = async function (req, res) {
  var email = req.body.email;
  conn.query(
    `select * from registration where u_email='${email}';`,
    (err, data) => {
      if (err) throw err;
      // console.log(data);
      if (data.length == 0) {
        res.json(true);
      } else {
        res.json(false);
      }
    }
  );
};

var registerPost = async function (req, res) {
  const user_name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  console.log(req.session);
  req.session.s_email = email;
  console.log(req.session.save);
  console.log(req.session,"s_email in register");

  let encrypt_password;
  encrypt_password = await bcrypt.hash(password, 10);

  const sql_insert = `insert into registration (u_name,u_email,u_password,isactive,u_login) values('${user_name}','${email}','${encrypt_password}','1','1');`;

  conn.query(sql_insert, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
  });

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
                <a href=" https://octa.appdemoserver.com/verify?session=${req.cookies.session_id}&email=${email}"> verify</a>
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

  res.send("register Succesfully!!!!");
};

var verifyGet = (req, res) => {
  // const reg_token = req.query.token;
  const email = req.query.email;

  console.log(email);
  console.log(req.session.s_email);
  console.log(req.session.s_email);
  if (req.session.s_email == email) {
    res.send("e-mail verification sucesfully!!!!!");
    conn.query(
      `update registration set isactive = '0' where u_email='${email}';`,
      (err, data) => {
        console.log(data);
      }
    );
  } else {
    res.send("something went wrong!!!!! e-mail is not verfied");
  }
  // Verifying the JWT token
  // jwt.verify(reg_token, "sanjay", function (err, decoded) {
  //   if (err) {
  //     console.log(err);
  //     res.send(
  //       "Email verification failed possibly the link is invalid or expired"
  //     );
  // } else {
  //   console.log(decoded);
  //   res.send("Email verifified successfully");
  //   con.query(
  //     `update registration set isactive = '0' where u_email='${email}';`,
  //     (err, data) => {
  //       console.log(data);
  //     }
  //   );
  // }
  // });
};

module.exports = {
  registerGet,
  Inemail,
  cloneEmailPost,
  registerPost,
  verifyGet,
};
