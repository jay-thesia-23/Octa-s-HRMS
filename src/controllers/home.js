const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "../views/layouts/main"); //added
var mysql = require("mysql2");
var path=require("path")
app.set("views",path.join(__dirname,"../views"))

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hrms",
});

con.connect((err) => {
  if (err) throw err;
});

const homePost=(req, res) => {
  var date = new Date();
  console.log(date);
  const year = date.getFullYear();
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }

  const day = date.getDate();
  const x = year + "-" + month + "-" + day;
  console.log(x);

  con.query(
    `select firstname,lastname,birth_date from employee_basic_infomation where birth_date = '${x}'; `,
    function (error, result) {
      if (error) throw error;
      console.log(result);

      let date_time = new Date();
      console.log(date_time);

      res.render("home.ejs", { result, date_time });
    }
  );
}

module.exports = {homePost};
