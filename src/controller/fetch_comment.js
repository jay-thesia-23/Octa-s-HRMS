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


var fetchcommentGet = (req, res) => {
    
  console.log("in fetch comment");
  
  var login_token = req.cookies.login_token

  jwt.verify(login_token, "sanjay", function (err, decoded) {
      login_user__id = decoded.id[0].id
  });


    var sql = `select comment from comment_table where reg_id='${login_user__id}';`
    conn.query(sql, function(err,data){
          if(err) throw err
          console.log(data.length);
          if(data.length == 0){
              console.log("wrong");
          }else{
              console.log(data,"data");
              var sql = data[0].comment
              console.log(sql,"query .....");
              
                  var sql1 = `select comment from comment_table where reg_id='${login_user__id}' ORDER BY id DESC limit 3 ;`
                  conn.query(sql1 , function(err,result){
                      if(err) throw err
                      console.log(result,"result");
                          res.json(result)
                    
                  })
        
          }
     
      })
}



module.exports = { fetchcommentGet };
