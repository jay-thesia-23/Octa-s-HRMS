var express=require("express")
var jwt=require("jsonwebtoken")

var app = express();

const authentication = (req, res, next) => {
  let login_token = req.cookies.login_token;


  if (login_token) {
    jwt.verify(login_token, "sanjay", (err, data) => {
      if (data != undefined) {

        next();
      }else{
        res.clearCookie("login_token")
        res.redirect("/login")
      }
    });
  } else {
    res.redirect("/login");
  }
};

module.exports={authentication}
