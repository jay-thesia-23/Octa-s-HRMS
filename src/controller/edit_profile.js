var mysql = require("mysql2");
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.json());
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var cookieParser = require("cookie-parser");

var jwt = require("jsonwebtoken");
app.use(cookieParser());
var multer = require("multer");
var conn = require("../config/dbConnect");
var sharp = require("sharp");
var path = require("path");
var editProfileGet = function (req, res) {
  // res.render("editProfile")
  var login = req.cookies.login_token;

  var login_user__id;

  jwt.verify(login, "sanjay", function (err, decoded) {
    // console.log(decoded);
    login_user__id = decoded.id[0].id;
  });

  conn.query(`select * from cource_master; `, function (error, data2) {
    if (error) throw error;

    conn.query(`select * from state_master; `, function (error, data3) {
      if (error) throw error;

      conn.query(
        `SELECT * FROM employee_basic_infomation where reg_id = ${login_user__id};`,
        function (error, result1) {
          if (error) throw error;

          conn.query(
            `SELECT * FROM education_table where reg_id = ${login_user__id};`,
            function (error, result2) {
              if (error) throw error;
              //  console.log(result2)
              conn.query(
                `SELECT * FROM reference_master where reg_id = ${login_user__id};`,
                function (error, result3) {
                  if (error) throw error;
                  //  console.log(result3)
                  conn.query(
                    `select * from document_master where reg_id=${login_user__id}`,
                    (err, resultDoc) => {
                      res.render("wizard_edit", {
                        data2,
                        data3,
                        result1,
                        result2,
                        result3,
                        resultDoc,
                      });
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
};

var uniqueSuffix = "";
const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, "./uploads");
  },
  filename: async function (req, files, cb) {
    uniqueSuffix = `${Date.now()}-${files.originalname}`;
    console.log(uniqueSuffix, "from the storage");
    console.log(uniqueSuffix, "unuidfssufficx");

    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

var editProfilePost = async (req, res) => {
  // console.log("helllo POASTETUEH");
  // console.log(req.files, "file in uploads");
  // console.log(req.body);

  var data = req.files;

  console.log(Object.keys(data).length);

  for (let i = 0; i < 5; i++) {
    var objKey = Object.keys(data)[i];

    for (let j = 0; j < 1; j++) {
      console.log(data[objKey], "objectkdfsjdf");
      var subItem = data[objKey][j];
      console.log(subItem.filename, "file namessssssss");

      var fileNameFormat=subItem.filename.split(".")

      console.log(fileNameFormat,"format");

      if(fileNameFormat[1]=="png"){
        await sharp(`uploads/${subItem.filename}`)
        .resize({ width: 200 })
        .png({ quality: 80 })
        .toFile(path.resolve("compress", `compress+${subItem.filename}`));
      }

      if(fileNameFormat[1]=="jpeg"){
        await sharp(`uploads/${subItem.filename}`)
        .resize({ width: 200 })
        .jpeg({ quality: 80 })
        .toFile(path.resolve("compress", `compress+${subItem.filename}`));
      }

      if(fileNameFormat[1]=="jpg"){
        await sharp(`uploads/${subItem.filename}`)
        .resize({ width: 200 })
        .jpeg({ quality: 80 })
        .toFile(path.resolve("compress", `compress+${subItem.filename}`));
      }

  
    }
  }

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
  var login_token = req.cookies.login_token;

  jwt.verify(login_token, "sanjay", function (err, decoded) {
    // console.log(decoded);
    login_user__id = decoded.id[0].id;
  });

  // basic_information

  conn.query(
    `delete from employee_basic_infomation where reg_id ='${login_user__id}'`,
    function (error, res) {
      if (error) throw error;
    }
  );

  const deleteDoc = `delete from document_master where reg_id ='${login_user__id}'`;

  console.log(deleteDoc);
  conn.query(deleteDoc, (err, dataDoc) => {});

  conn.query(
    `insert into employee_basic_infomation (reg_id,firstname,lastname,birth_date,address,gender,phone_number,relationship,state,city,email,designation,department) values('${login_user__id}','${firstname}','${lastname}','${birth_date}','${address}','${gender}','${phone_number}','${relationship}','${state}','${city}','${email}','${designation}','${department}') ;`,
    function (error, data) {
      if (error) throw error;
      id = data.insertId;

      // education

      if (typeof percentage == "string") {
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

      conn.query(sql, function (error, data) {
        if (error) throw error;

        var sqlGetDocs = `select * from document_master where req_id=${login_user__id}`;
        var sqlDocs = `INSERT INTO document_master(
          employee_id,
          reg_id,
          adhar,
          resume_doc,
          cheque,
          other,
          profile_pic) VALUES ("${id}","${login_user__id}","${req.files.adhar[0].filename}","${req.files.resume[0].filename}","${req.files.cheque[0].filename}","${req.files.others[0].filename}","${req.files.profilePic[0].filename}");`;

        conn.query(sqlDocs, (err, docs) => {});
      });

      //documents
      // var sqlDoc=`insert into document_master()`
    }
  );

  // res.end();
  res.redirect("/profile");
};

module.exports = { editProfileGet, editProfilePost };
