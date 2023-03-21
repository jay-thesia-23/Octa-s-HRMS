var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine', 'ejs')
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added
var jwt = require("jsonwebtoken");


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hrms'

});

connection.connect((err) => {
  if (err)
    throw err;
  console.log("connected");
})


app.get("/leaves", (req, res) => {

  var data = [];
  var count;
  var curr_page;
  page = req.query.num || 1;
  var ajax = req.query.ajax ||false;
  curr_page = parseInt(req.query.num);
  limit = 5;
  offset = (page - 1) * limit;
  if (isNaN(offset)) {
    offset = 0;
  }

  connection.query(`select *from request_leave_table limit ${offset},${limit}`, (error, result) => {
    if (error) { throw error; }
    data = result; 
    res.render('leaves', { data, count: count , curr_page});
    console.log("record displayed successfully")
  });

  //res.render('leaves');
})   

app.post("/leaves",(req,res)=>{
console.log("in leaves");
 // const upload_compress = multer({ storage_compress });
    var token = req.cookies.token
    console.log(token + "tokennnnnnnnnnnnnnnn");
   

  jwt.verify(token, 'sanjay', function (err, decoded) {

    console.log(req.body);
  let ldate = req.body.ldate;
  let leavetype = req.body.leavetype;
  let reason = req.body.reason;
  console.log(ldate);
  console.log(leavetype);
  console.log(reason);

  //date
  var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;
console.log(today);

   // console.log(JSON.stringify(decoded.id) + "decodeeeee");
   console.log(decoded.id);

   var id = decoded.id;
   console.log(id+"iddd");

    var sql = `INSERT INTO request_leave_table(employee_id,leave_category,request_date,leave_date,leave_reason) VALUES ("${id} ","${leavetype} ","${today} ","${ldate}","${reason}")`;

    connection.query(sql, function (err, result) {
      if (err) throw err
      console.log(result);
      console.log("data inserted successfully")
    })
 })
 res.redirect("/");
})
  
module.exports = app

