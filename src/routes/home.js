const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "../views/layouts/main"); //added
var mysql = require("mysql2");
var path=require("path")

var router=express.Router()
var {homePost}=require("../controllers/home")
// app.set("views",path.join(__dirname,"../views"))

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hrms",
});

con.connect((err) => {
  if (err) throw err;
});

router.get("/home", homePost);

module.exports = router;
