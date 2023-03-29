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
var conn = require("../config/dbConnect");

var leaveGet = (req, res) => {
  var data = [];
  var count;
  var curr_page;
  page = req.query.num || 1;
  var ajax = req.query.ajax || false;
  curr_page = parseInt(req.query.num);
  limit = 50;
  offset = (page - 1) * limit;
  if (isNaN(offset)) {
    offset = 0;
  }
  var login_token = req.cookies.login_token;

  jwt.verify(login_token, "sanjay", function (err, decoded) {
    // console.log(decoded);
    id = decoded.id[0].id;
    console.log(id);
    conn.query(
      `select *from request_leave_table where reg_id = "${id}" `,
      (error, result) => {
        if (error) {
          throw error;
        }
        data = result;
        res.render("leaves", { data, count: count, curr_page });
        console.log("record displayed successfully");
      }
    );
  });
  //res.render('leaves');
};

var leavePost = (req, res) => {
  console.log("in leaves");
  // const upload_compress = multer({ storage_compress });
  var login_token = req.cookies.login_token;
  console.log(login_token + "tokennnnnnnnnnnnnnnn");

  jwt.verify(login_token, "sanjay", function (err, decoded) {
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

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

    console.log(JSON.stringify(decoded.id) + "decodeeeee");
    console.log(decoded.id);

    var id = decoded.id[0].id;
    console.log(id + "iddd");

    var sql = `INSERT INTO request_leave_table(reg_id,leave_category,request_date,leave_date,leave_reason) VALUES ("${id} ","${leavetype} ","${today} ","${ldate}","${reason}")`;

    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      console.log("data inserted successfully");
    });
  });
  res.redirect("/leaves");
};


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
  
  console.log(count);

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
 
