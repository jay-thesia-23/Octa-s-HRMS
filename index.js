var mysql = require('mysql2');
var express = require('express');
var wizad=require("./routes/wizard")

var app = express();
app.set('view engine', 'ejs')
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(wizad)

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


app.listen(5000, () => {
    console.log('port running at ' + 5000)
  });
  