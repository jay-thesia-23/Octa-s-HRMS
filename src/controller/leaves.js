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

app.get("/leaves", (req, res) => {
  var data = [];
  var count;
  var curr_page;
  page = req.query.num || 1;
  var ajax = req.query.ajax || false;
  curr_page = parseInt(req.query.num);
  limit = 5;
  offset = (page - 1) * limit;
  if (isNaN(offset)) {
    offset = 0;
  }
  var login_token = req.cookies.login_token;

<<<<<<< HEAD
  connection.query(
    `select *from request_leave_table limit ${offset},${limit}`,
    (error, result) => {
      if (error) {
        throw error;
      }
      data = result;
      res.render("leaves", { data, count: count, curr_page });
      console.log("record displayed successfully");
    }
  );

=======
  jwt.verify(login_token, "sanjay", function (err, decoded) {
    // console.log(decoded);
    id = decoded.id[0].id;
  
    conn.query(
      `select *from request_leave_table where reg_id = "${id}" `,
      (error, result) => {
        if (error) {
          throw error;
        }
        data = result;
        res.render("leaves", { data, count: count, curr_page });
     
      }
    );
  });
>>>>>>> dcced8ac3f2aa7a8f50041baff2eac02e95aebc4
  //res.render('leaves');
});

<<<<<<< HEAD
app.post("/leaves", (req, res) => {
  console.log("in leaves");
  // const upload_compress = multer({ storage_compress });
=======
var leavePost = (req, res) => {

  
>>>>>>> dcced8ac3f2aa7a8f50041baff2eac02e95aebc4
  var login_token = req.cookies.login_token;
  

  jwt.verify(login_token, "sanjay", function (err, decoded) {
<<<<<<< HEAD
    console.log(req.body);
  let ldate = req.body.ldate;
  let leavetype = req.body.leavetype;
  let reason = req.body.reason;
  console.log(ldate);
  console.log(leavetype);
  console.log(reason);
=======
  
    let ldate = req.body.ldate;
    let leavetype = req.body.leavetype;
    let reason = req.body.reason;
   
>>>>>>> dcced8ac3f2aa7a8f50041baff2eac02e95aebc4

  //date
  var today = new Date();
var dd = today.getDate();

<<<<<<< HEAD
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

   console.log(JSON.stringify(decoded.id) + "decodeeeee");
   console.log(decoded.id);

   var id = decoded.id[0].id;
   console.log(id+"iddd");
=======
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;


    var id = decoded.id[0].id;
  
>>>>>>> dcced8ac3f2aa7a8f50041baff2eac02e95aebc4

    var sql = `INSERT INTO request_leave_table(reg_id,leave_category,request_date,leave_date,leave_reason) VALUES ("${id} ","${leavetype} ","${today} ","${ldate}","${reason}")`;

    connection.query(sql, function (err, result) {
      if (err) throw err;
     
    });
  });
  res.redirect("/leaves");
});

<<<<<<< HEAD
module.exports = app;
=======

app.get('/searching', function (req, res) {
  var text = req.query.search || 1;
  var data;
//
var data = [];
var count;
var curr_page;
page = req.query.num || 1;
curr_page = parseInt(req.query.num);
limit = 25;
offset = (page - 1) * limit;
if (isNaN(offset)) {
  offset = 0;
}
conn.query('select count(*) as numrows  from request_leave_table', (error, data) => {
  if (error) throw error;
  data[0] = data[0].numrows;
  count = Math.ceil(data[0] / limit);
  


});

var category = "";
var leavedate = "";
      
//       var leavedate = "";
// //
//   if (text == 1 || "") {
//       conntion.query(`select * from request_leave_table `, function (err, data) {
//           if (err) throw err;
//           data = data;
//           res.render('leaves', { data :data });
//       });
//   }
//   else {

//       var category = "";
      
//       var leavedate = "";

//       for(var i=0; i<text.length; i++)
//       {
//           if(text.charAt(i) == '')
//           {
//               for(var j=i+1; j<=text.length; j++)
//               {
                 
//                       var category = category + text.charAt(j);
                
//               }
//           }
        
//           else if(text.charAt(i) == '')
//           {
//               for(var j=i+1; j<=text.length; j++)
//               {
                  
//                       var leavedate = leavedate + text.charAt(j);
              
//               }
//           }
//       }

      conn.query(`select * from request_leave_table where leave_category LIKE '%${category}%' AND leave_date LIKE '%${leavedate}%'`, function (err, data) {
          if (err) throw err;
          data = data;
          res.render('leaves', { data :data});
      });
  
});

module.exports ={ leavePost, leaveGet}; 
 
>>>>>>> dcced8ac3f2aa7a8f50041baff2eac02e95aebc4
