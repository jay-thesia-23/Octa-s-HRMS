const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added
var mysql = require('mysql2');

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

app.get('/home', (req, res) => {

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

    con.query(`select firstname,lastname,birth_date from employee_basic_infomation where birth_date = '${x}'; `, function (error, result) {
        if (error) throw error;
        console.log(result);
        
        
        res.render('home.ejs', {result})
    })

   
})

module.exports = app