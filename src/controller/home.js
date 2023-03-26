const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
var path=require("path")
app.set('layouts', path.resolve("src","view","layouts","main")) //added

var conn=require("../config/dbConnect")




var homeGet=(req, res) => {

  console.log();
  var date = new Date;
  console.log(date);
  const year = date.getFullYear();
  var month = date.getMonth() +1;
  if (month <10) {
      month = '0' + month
  }
 
  const day = date.getDate();
   const x = year+ "-"+ month+ "-"+ day
   console.log(x);

  conn.query(`select firstname,lastname,birth_date from employee_basic_infomation where birth_date = '${x}'; `, function (error, result) {
      if (error) throw error;
      console.log(result);
      
      
      res.render('home.ejs', {result})
  })

 
}


module.exports = {homeGet}