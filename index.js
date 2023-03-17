
var mysql2 = require('mysql2');
var express = require('express');
var wizad=require("./routes/wizard")
const path = require('path')
const routes = require('../HRMS/routes/registration')

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


app.listen(5000, () => {
    console.log('port running at ' + 5000)
  });
  


