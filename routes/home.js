const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added
var mysql = require('mysql2');
const util = require('util')

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

var alldata = util.promisify(con.query.bind(con));

const d = new Date();
var x = d.getMonth() + 1;
var y = d.getDate();
var z = d.getFullYear();

var fulldate = y + "/" + x + "/" + z



app.get('/home', (req, res) => {

  var date = new Date;
  console.log(date);
  const year = date.getFullYear();
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month
  }

  const day = date.getDate();
  const x = year + "-" + month + "-" + day
  console.log(x);

  con.query(`select firstname,lastname,birth_date,time_stamp from employee_basic_infomation where birth_date = '${x}'; `, function (error, result) {
    if (error) throw error;0
    console.log(result);
    res.render('home.ejs', { result })
  })
})

app.get('/employee_activity', async (req, res) => {

  
  
   var employee_check = await alldata(`select firstname,lastname,status,date,time from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where  check_master.date = '${fulldate}';`)
  
   var employee_breck = await alldata(`select firstname,lastname,status,date,time from employee_basic_infomation inner join breck_master on employee_basic_infomation.reg_id=breck_master.reg_id where  breck_master.date = '${fulldate}';`)
   var employee_activity = employee_check.concat(employee_breck) 
 
   res.json(employee_activity);
  
  });

app.get('/search', async (req, res) => {
var search = req.query.name
var f_name = ""
var l_name = ""
name_array = search.split(" ");
f_name = name_array[0]

f_name = f_name.substring(1)


var l_name=name_array[1]


 var search_check = await alldata(`select firstname,lastname,status,date,time from employee_basic_infomation inner join check_master on employee_basic_infomation.reg_id=check_master.reg_id where  check_master.date = '${fulldate}' AND employee_basic_infomation.firstname like '%${f_name}%' AND employee_basic_infomation.lastname like '%${l_name}%' ;`)

 var search_breck = await alldata(`select firstname,lastname,status,date,time from employee_basic_infomation inner join breck_master on employee_basic_infomation.reg_id=breck_master.reg_id where  breck_master.date = '${fulldate}'  AND employee_basic_infomation.firstname like '%${f_name}%' AND employee_basic_infomation.lastname like '%${l_name}%' ;`)
 var search_result = search_check.concat(search_breck) 
 console.log(search_result);
 res.json(search_result);

});






module.exports = app