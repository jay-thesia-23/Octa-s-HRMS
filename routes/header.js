const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added
var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hrms",
});

con.connect((err) => {
  if (err) throw err;
});

app.get("/logout",(req,res)=>{
    console.log("clicked on logout");
   res.render("logout")
})


app.post("/logout",(req,res)=>{

    console.log("inside the post");

    const login_token=req.cookies

    res.clearCookie("login_token")
    res.clearCookie("connect.sid")

    console.log("in login redired");
    res.redirect("/")
    
    
    console.log(login_token);

})

module.exports=app