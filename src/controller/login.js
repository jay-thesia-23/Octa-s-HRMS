var express = require("express");
var ejs = require("ejs");
var path = require("path");
var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const util = require("util");
var bodyparser = require("body-parser");

var app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var mysql = require("mysql2");
app.use(cookieParser());
var path = require("path");
// app.set("views",path.join(__dirname,"views"))


var conn = require("../config/dbConnect");

var loginGet = (req, res) => {

  var url = req.get('Host')

  console.log(url,"..........................");
  res.cookie('om', url)
  var server_url = req.cookies.om
  res.render("login.ejs", {layout:false});
};

async function Inemail(email) {
  return await new Promise((res, rej) => {
    conn.query(
      `select * from registration where u_email='${email}';`,
      (err, data) => {
        if (err) throw err;
        res(data);
  
      }
    );
  });
}

var loginPost = async (req, res) => {

  var url = req.get('origin')

  console.log(url,"..........................");
  res.cookie('om', url)
  var server_url = req.cookies.om
  var email = req.body.email;
  var password = req.body.password;
  var data2;
  var data3;
  var data = await Inemail(email);

  var id;

  var query = util.promisify(conn.query).bind(conn);
  var id = await query(`select id from registration where u_email='${email}'`);
 
  // console.log(data)

  if (data.length != 0) {
    async function compare_psw(password, data) {
      return await new Promise((res, rej) => {
        bcrypt.compare(password, data[0].u_password, (err, isMatch) => {
          if (err) {
            return err;
          }
          res(isMatch);
        });
      });
    }
    var isMatch = await compare_psw(password, data);
    console.log(isMatch);
    if (isMatch == true) {
      console.log(data[0].isactive);

      const login_token = jwt.sign({ email, id }, "sanjay");

      res.cookie("login_token", login_token);

      if (data[0].isactive == "1") {
        res.send("wait for some min");
      } else {
        if (data[0].u_login == 1) {
          conn.query(`select * from state_master; `, function (error, data_3) {
            if (error) throw error;
            data3 = data_3;
            conn.query(
              `select * from cource_master; `,
              function (error, data_2) {
                if (error) throw error;
                data2= data_2;
          conn.query(`update registration set u_login = '0' where u_email='${email}';`,
            (err, data) => {
              if (err) throw err;
              
              res.render("wizard.ejs",{data3,data2});
            });
        })
      })
        } else {
          res.redirect("/home");
        }

      
      }
    } else {
      return res.send(
        ` Email or Password is Wrong!..........<br><a href="/login"> Back to Login </a> `
      );
    }
  } 
   else  {
        return res.send(
          `  Email or Password is Wrong!.........<br><a href="/login"> Back to Login </a> `
        );
      }
   
  
};
module.exports = { loginGet, Inemail, loginPost };
