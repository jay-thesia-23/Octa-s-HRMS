var express = require("express");

var app = express();
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
var conn = require("../config/dbConnect");
const { dirname } = require("path");

app.use(express.static("public"));
app.set("views", path.join(__dirname, "../views"));

app.use(
  session({
    name: "session_id",
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

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
    to: `${email}`,

    auth: {
      user: "hrms1650@gmail.com",
      pass: "vymm mlia vhln fuze",
    },
  });

  const login_token = jwt.sign({ email: email }, "sanjay")
  res.cookie("login_token", login_token)


  const mailConfigurations = {

    to: `${email}`,

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
                <a href=" https://octa.appdemoserver.com/verify?email=${email}"> verify</a>
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

  res.sendFile(path.join(__dirname, "verificationrequest.html"));
};

var verifyGet = (req, res) => {

  const email = req.query.email;

  console.log(email);

  const token=req.cookies.login_token
  jwt.verify(token, "sanjay", function (err, decoded) {
    if (err) {
     
      res.sendFile(path.join(__dirname, "somthingwentwrong.html"));
    } else {
      console.log(decoded);
      res.sendFile(path.join(__dirname, "adminverifide.html"));
      conn.query(
        `update registration set isactive = '0' where u_email='${email}';`,
        (err, data) => {
          console.log(data);
        }
      );
    }
  });


 
};

module.exports = {
  registerGet,
  Inemail,
  cloneEmailPost,
  registerPost,
  verifyGet,
};
