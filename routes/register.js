var express = require("express");
var app = express();
app.use(express.json());
const bcrypt = require("bcrypt");
app.use(express.static("css"));
app.use(express.static("images"));
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var mysql = require("mysql2");
var cookieParser = require("cookie-parser");
// app.use(cookieParser());
var jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');

const fs = require('fs');
const util = require('util')

app.use(cookieParser());

app.use("/public", express.static("public"));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hrms",
});

con.connect((err) => {
  if (err) throw err;
  console.log(" database connected ");
});
app.get("/register", (req, res) => {
  res.render("register.ejs", {});
});

async function Inemail(email) {
  return await new Promise((res, rej) => {
    con.query(
      `select * from registration where u_email='${email}';`,
      (err, data) => {
        if (err) throw err;
        // console.log(data);
        if (data.length == 0) {
            res.json(true)
        } else {
            res.json(false)
        }
    })

})
}




app.post('/register', async (req, res) => {

    console.log("register inside");
    var user_name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    encrypt_password = await bcrypt.hash(password, 10);

    var encrypt_password;


    var query = util.promisify(con.query).bind(con)
        var data = await query(`select * from registration where u_email='${email}'`)
            console.log(data.length);
    
    if(user_name == "" || email == "" || password == "" || encrypt_password == ""){
        res.end('blank')
    }
    else if(password == encrypt_password || password.length < 3){
        res.end('password not matched')
    }
    else if(data.length > 0){
        res.end('Invalid E-Mail!!!!')
    }
    else{
       
    encrypt_password = await bcrypt.hash(password, 10);

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "hrms1650@gmail.com",
      pass: "vymm mlia vhln fuze",
    },
  });

  const regiter_token = jwt.sign({ email: email }, 'sanjay');
  res.cookie("regiter_token", regiter_token);

  const mailConfigurations = {
    from: "hrms1650@gmail.com",

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
                <a href=" http://localhost:5000/verify?token=${regiter_token}&email=${email} "> verify</a>
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

    res.send("register Succesfully!!!!")

    }
})


app.get('/verify', (req, res) => {
    const reg_token = req.query.token;
    const email = req.query.email;

    // Verifying the JWT token 
    jwt.verify(reg_token, 'sanjay', function (err, decoded) {
        if (err) {
            console.log(err);
            res.send("Email verification failed possibly the link is invalid or expired");
        }
        else {

            console.log(decoded);
            res.send("Email verifified successfully");
            con.query(`update registration set isactive = '0' where u_email='${email}';`, (err, data) => {

                console.log(data);
            })

        }
    });
});

app.get("/verify", (req, res) => {
  const token = req.query.token;
  const email = req.query.email;
  console.log(email);
  console.log(token);
  // Verifying the JWT token
  jwt.verify(token, "sanjay", function (err, decoded) {
    if (err) {
      console.log(err);
      res.send(
        "Email verification failed possibly the link is invalid or expired"
      );
    } else {
      console.log(decoded);
      res.send("Email verifified successfully");
      con.query(
        `update registration set isactive = '0' where u_email='${email}';`,
        (err, data) => {
          console.log(data);
        }
      );
    }
  });
});

module.exports = app, { Inemail };
