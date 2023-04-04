var express = require("express");
const session = require("express-session");
var app = express();
app.use(express.json());
const bcrypt = require("bcrypt");
app.use(express.static("css"));
app.use(express.static("images"));
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyparser.json({limit: '50mb'}));
var mysql = require("mysql2");
var cookieParser = require("cookie-parser");
app.use(cookieParser());
var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
var path = require("path");
var conn = require("../config/dbConnect");
var multer = require("multer");

app.use(express.static("public"));
async function Inemail(email) {
  return await new Promise((res, rej) => {
    conn.query(
      `select * from registration where u_email='${email}';`,
      (err, data) => {
        if (err) throw err;
        res(data);
        // console.log(data.length);
      }
    );
  });
}

var wizardGet = (req, res) => {
  conn.query(`select * from cource_master; `, function (error, data2) {
    if (error) throw error;

    conn.query(`select * from state_master; `, function (error, data3) {
      if (error) throw error;

      res.render("wizard", { data3, data2, layout: false });
    });
  });
};


var cityCourse=(req,res)=>{
  
}
var testApiGet = function (req, res) {
  let state_1 = req.query.state_id || "";
  console.log(req.get('Host'));

  console.log(state_1);
  conn.query(
    `select city_master.city_name from city_master inner join state_master on city_master.state_id = state_master.state_id where state_name = '${state_1}';`,
    function (error, result) {
      if (error) throw error;
      // console.log(result)

      res.send(result);
      res.end();
    }
  );
};

var courceGet = function (req, res) {
  conn.query(`select * from cource_master;`, function (error, data2) {
    if (error) throw error;
    // console.log(result)

    res.send(data2);
    res.end();
  });
};

var uniqueSuffix = "";
const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, files, cb) {
    uniqueSuffix = `${Date.now()}-${files.originalname}`;
    console.log(uniqueSuffix, "from the storage");
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

// var  {upload}  = require("../middleware/multerMiddlewre.js");
// app.use(upload);

const uploadDoc = (req, res) => {
  if (req.files.length) {
    console.log(req.files);

    req.flash("success", "Files Uploaded.");
  }
};

const wizardPost = async (req, res) => {
  console.log(req.files, "file in uploads");
  console.log(req.files.adhar[0].filename, "file of adhar");
  console.log(req.body);

  console.log(req.cookies, "in get cookie");
  var id;
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var birth_date = req.body.dob_1;
  var address = req.body.address;
  var gender = req.body.gender;
  var phone_number = req.body.contact;
  var relationship = req.body.relationship;
  var state = req.body.state;
  var city = req.body.city;
  var email = req.body.email;
  var designation = req.body.designation;
  var department = req.body.department;

  var course_name = req.body.course || 0;
  var percentage = req.body.percent;
  var board_university_name = req.body.uni;
  var passout_year = req.body.passyear;

  var name1 = req.body.name1;
  var number1 = req.body.cont1;
  var relationship1 = req.body.relation1;
  var name2 = req.body.name2;
  var number2 = req.body.cont2;
  var relationship2 = req.body.relation2;

  var login_user__id;

  console.log(req.cookies, "cookies in login user");

  var login_token = await req.cookies.login_token;

  jwt.verify(login_token, "sanjay", function (err, decoded) {
    // console.log(decoded);
    login_user__id = decoded.id[0].id;
    console.log(login_user__id);
  });
  console.log(login_user__id);

  // basic_information

  conn.query(
    `insert into employee_basic_infomation (reg_id,firstname,lastname,birth_date,address,gender,phone_number,relationship,state,city,email,designation,department) values('${login_user__id}','${firstname}','${lastname}','${birth_date}','${address}','${gender}','${phone_number}','${relationship}','${state}','${city}','${email}','${designation}','${department}') ;`,
    function (error, data) {
      if (error) throw error;
      id = data.insertId;
      console.log(id, "last insserted id");

      //document
      var sqlDocs = `INSERT INTO document_master(
        employee_id,
        reg_id,
        adhar,
        resume_doc,
        cheque,
        other,
        profile_pic) VALUES (${id},${login_user__id},"${req.files.adhar[0].filename}","${req.files.resume[0].filename}","${req.files.cheque[0].filename}","${req.files.others[0].filename}","${req.files.profilePic[0].filename}");`;

      console.log(sqlDocs);
      conn.query(sqlDocs, (err, docs) => {
        console.log("doc is inserted");
      });

      // education

      if (typeof course_name == "string") {
        conn.query(
          `insert into education_table (reg_id,employee_id,cource_name,percentage,board_university_name,passout_year) values('${login_user__id}','${id}','${course_name}','${percentage}','${board_university_name}','${passout_year}');`,
          function (error, data) {
            if (error) throw error;

            // console.log(data)
          }
        );
      } else {
        for (let j = 0; j < course_name.length; j++) {
          conn.query(
            `insert into education_table (reg_id,employee_id,cource_name,percentage,board_university_name,passout_year) values('${login_user__id}','${id}','${course_name[j]}','${percentage[j]}','${board_university_name[j]}','${passout_year[j]}');`,
            function (error, data) {
              if (error) throw error;
              // console.log(data)
            }
          );
        }
      }

      // reference_master
      var sql = `insert into reference_master (reg_id,employee_id,name,number,relationship) values('${login_user__id}','${id}','${name1}','${number1}','${relationship1}'),('${login_user__id}','${id}','${name2}','${number2}','${relationship2}') ;`;
      console.log(sql);

      conn.query(sql, function (error, data) {
        if (error) throw error;
      });
    }
  );

  // res.end();
  res.redirect("/home");
};

module.exports = {
  wizardGet,
  wizardPost,
  Inemail,
  courceGet,
  testApiGet,
  upload
};
