var mysql = require("mysql2");
var express = require("express");
var app = express();
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added
var jwt = require("jsonwebtoken");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hrms",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});


app.get("/comment", (req, res) => {
   
    res.render('leaves');

});
  

app.post("/comment", (req, res) => {
   
   
  jwt.verify(token, "sanjay", function (err, decoded) {
    console.log(req.body);
  let comment = req.body.comment;
  
  console.log(comment);

 
   console.log(JSON.stringify(decoded.id) + "decodeeeee");
   console.log(decoded.id);

   var id = decoded.id[0].id;
   console.log(id+"iddd");

    var sql = `INSERT INTO comment_table(employee_id,comment) VALUES ("${id} ","${comment}")`;

    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      console.log("data inserted successfully");
    });
  });
  res.redirect("/home");
});
  