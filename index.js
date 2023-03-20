
var mysql2 = require('mysql2');
var express = require('express');
var wizad=require("./routes/wizard")
const path = require('path')
const routes = require('./routes/registration')
const multerUpload=require('./routes/multer')
const dashboard=require('./routes/dashboard')
const leaves=require('./routes/leaves')

var app = express();
app.set('view engine', 'ejs')
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
// app.use("/public", express.static("public"));
app.use(wizad)
app.use(routes)
app.use(multerUpload)
app.use(dashboard)
app.use(leaves)


var connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hrms'

});

connection.connect((err) => {
  if (err)
    throw err;
  console.log("connected with database");
})
app.get('/attendance',(req,res)=>{
  res.render('attendance.ejs');
});

app.get('/hotline',(req,res)=>{
  res.render('hotline.ejs');
});

app.listen(5000, () => {
    console.log('port running at ' + 5000)
});
  


