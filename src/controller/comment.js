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

var conn = require("../config/dbConnect");

commentGet=(req, res) => {
  console.log("in comment");
  
  res.render('home');
} 


commentPost=(req, res) => {
  console.log("in comment");
  
  var login_token = req.cookies.login_token;
  console.log(login_token + "tokennnnnnnnnnnnnnnn");

  jwt.verify(login_token, 'sanjay', function (err, decoded) {

   console.log(req.body);
   
   var comment = req.body.comment;
   console.log(comment);

   console.log(JSON.stringify(decoded.id) + "decoding");
   console.log(decoded.id);

   var id = decoded.id[0].id;
   console.log(id+"iddd");

    var sql = `INSERT INTO comment_table(reg_id,comment) VALUES ("${id} ","${comment}")`;

    conn.query(sql, function (err, result) {
      if (err) throw err
      console.log(result);
      console.log("data inserted successfully")
    })
    res.redirect("/home");
 })



  res.render('home');
} 
module.exports = { commentGet, commentPost };