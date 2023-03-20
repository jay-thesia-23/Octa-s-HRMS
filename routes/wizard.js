var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine', 'ejs')
const multerUpload = require('./multer')
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
var multer = require('multer')

app.use(multerUpload)
const upload = multer({ dest: "uploads/" });

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
  if (err)
    throw err;
  console.log("connected");
})


app.get("/wizard", (req, res) => {
  res.render('wizard');
})


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

app.post("/wizard", upload.fields([{
    name: 'adhar', maxCount: 1
  }, {
    name: 'resume', maxCount: 1
  }, {
    name: 'cheque', maxCount: 1
  }, {
    name: 'others', maxCount: 1
  },])
  , async (req, res) => {

    console.log(req.files, "file in uploads");
    // 
   
    // 
    const uniqueSuffix = ""
    const storage = multer.diskStorage({
      destination: function (req, files, cb) {
        cb(null, "./uploads");
      },
      filename: function (req, files, cb) {
        uniqueSuffix = Date.now() + "-" + `${originalname}`;
        console.log(uniqueSuffix, "from the storage");
        cb(null, uniqueSuffix);
      },
    });



    const upload = multer({ storage });
    // const upload_compress = multer({ storage_compress });
    var token = req.cookies.token
    console.log(token + "tokennnnnnnnnnnnnnnn");
    console.log(upload);

    jwt.verify(token, 'sanjay', function (err, decoded) {
      // console.log(JSON.stringify(decoded.id) + "decodeeeee");
      console.log(decoded.id);

      var id = decoded.id;
      console.log(id+"iddd");
     
      var leave_cl = "CL";
      var leave_pl = "PL";
      var leave_hl = "HL";
      for(var i=0; i<5; i++)
      {
        connection.query("insert into leave_balance_23(id, leave_category) values('"+id+"', '"+leave_cl+"')",function(err,data){
          if(err) throw err;
          console.log('Data inserted successfully');
        })

        connection.query("insert into leave_balance_23(id, leave_category) values('"+id+"', '"+leave_pl+"')",function(err,data){
            if(err) throw err;
            console.log('Data inserted successfully');
        
        })

      }
      for(var i=0; i<4; i++)
      {
      connection.query("insert into leave_balance_23(id, leave_category) values('"+id+"', '"+leave_hl+"')",function(err,data){
        if(err) throw err;
        console.log('Data inserted successfully');
      })
    }

  });
    // console.log(upload_compress);

    res.redirect("/");
// 
    // var email = req.body.email;
    // console.log('email'+email)

    // var data = await Inemail(email);
    // console.log('data'+data)

    // connection.query(`select * from registration where email = '${email}'`, async (error, result) => {
    //   console.log(result);
    //   const data = result[0];
    //   console.log(data);

    //   // let eid = result[0].id;
    //   // console.log('eid:'+eid)
    // });
  });

  (module.exports = app), { Inemail };
