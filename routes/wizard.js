var mysql = require("mysql2");
var express = require("express");
var path = require("path");
var app = express();
app.set("view engine", "ejs");

var bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var multer = require("multer");

const register = require("./register");
app.use(register);
const login = require("./login");
app.use(login);
var jwt = require("jsonwebtoken");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hrms'

});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.get("/wizard", (req, res) => {
  res.render("wizard");
});

async function Inemail(email) {
  return await new Promise((res, rej) => {
    connection.query(
      `select * from registration where u_email='${email}';`,
      (err, data) => {
        if (err) throw err;
        res(data);
        // console.log(data.length);
      }
    );
  });
}

var uniqueSuffix = "";
const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, files, cb) {
    uniqueSuffix = `${Date.now()}-${files.originalname}`;
    console.log(uniqueSuffix, "from the storage");
    cb(null, uniqueSuffix );
  },
});

const upload = multer({ storage });

app.post(
  "/wizard",
  upload.fields([
    {
      name: "profilePic",
      maxCount: 1,
    },
    {
      name: "adhar",
      maxCount: 1,
    },
    {
      name: "resume",
      maxCount: 1,
    },
    {
      name: "cheque",
      maxCount: 1,
    },
    {
      name: "others",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    console.log(req.files, "file in uploads");

    // const upload_compress = multer({ storage_compress });
    var token = req.cookies.token;
    console.log(token + "tokennnnnnnnnnnnnnnn");
    console.log(upload);

    jwt.verify(token, "sanjay", function (err, decoded) {
      // console.log(JSON.stringify(decoded.id) + "decodeeeee");
      console.log(decoded.id);

      console.log(req.files.adhar,"addhar");

      let sqlDoc=`insert into document_master (employee_id,id,adhar,resume_doc,cheque,other,profile_pic) values ("1","1",
      "${req.files.adhar[0].filename}","${req.files.resume[0].filename}","${req.files.cheque[0].filename}","${req.files.others[0].filename}","${req.files.profilePic[0].filename}");`

      connection.query(sqlDoc,(err,datadoc)=>{
        console.log(datadoc);
        console.log("documents are added successfully");
      })

      console.log(sqlDoc);

      // var id = decoded.id;
      // console.log(id + "iddd");

      // var leave_cl = "CL";
      // var leave_pl = "PL";
      // var leave_hl = "HL";
      // for (var i = 0; i < 5; i++) {
      //   connection.query(
      //     "insert into leave_balance_23(id, leave_category) values('" +
      //       id +
      //       "', '" +
      //       leave_cl +
      //       "')",
      //     function (err, data) {
      //       if (err) throw err;
      //       console.log("Data inserted successfully");
      //     }
      //   );

      //   connection.query(
      //     "insert into leave_balance_23(id, leave_category) values('" +
      //       id +
      //       "', '" +
      //       leave_pl +
      //       "')",
      //     function (err, data) {
      //       if (err) throw err;
      //       console.log("Data inserted successfully");
      //     }
      //   );
      // }
      // for (var i = 0; i < 4; i++) {
      //   connection.query(
      //     "insert into leave_balance_23(id, leave_category) values('" +
      //       id +
      //       "', '" +
      //       leave_hl +
      //       "')",
      //     function (err, data) {
      //       if (err) throw err;
      //       console.log("Data inserted successfully");
      //     }
      //   );
      // }
    });
    // console.log(upload_compress);

    res.redirect("/");
  }
);
(module.exports = app), { Inemail };
