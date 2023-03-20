var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine', 'ejs')
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'form'

});

connection.connect((err) => {
  if (err)
    throw err;
  console.log("connected");
})


app.get("/leaves", (req, res) => {
  res.render('leaves');
})
module.exports = app

