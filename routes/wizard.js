var mysql = require("mysql2");
var express = require("express");
var path = require("path");
var app = express();
app.set("view engine", "ejs");

var bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var cookieParser = require('cookie-parser');
// app.use(cookieParser());
var jwt = require('jsonwebtoken')

app.use(cookieParser());


var multer=require('multer')


const upload = multer({ dest: "uploads/" });

const register = require("./register");
app.use(register);
const login = require("./login");
app.use(login);
var jwt = require("jsonwebtoken");

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hrms'

});

con.connect((err) => {
  if (err)
    throw err;
  console.log("connected");
})


app.get("/wizard",(req,res)=>{
  con.query(`select * from cource_master; `, function (error, data2) {
    if (error) throw error;
  
  
  con.query(`select * from state_master; `, function (error, data3) {
    if (error) throw error;
    res.render('wizard',{data3,data2});
  })
})
  
  })

 

  app.get('/test-api',function(req,res){

    let state_1 = req.query.state_id ||"";

    console.log(state_1)
    con.query(`select city_master.city_name from city_master inner join state_master on city_master.state_id = state_master.state_id where state_name = '${state_1}';`,function(error,result){
        if (error) throw error;
        // console.log(result)
      
        res.send(result);
        res.end();
    })
});

app.get('/cource',function(req,res){

 

  
  con.query(`select *from cource_master;`,function(error,data2){
      if (error) throw error;
      // console.log(result)
    
      res.send(data2);
      res.end();
  })
});




app.post("/wizard", upload.fields([{
  name: 'adhar', maxCount: 1
}, {
  name: 'resume', maxCount: 1
},{
  name: 'cheque', maxCount: 1
}, {
  name: 'others', maxCount: 1
}, ])
, async (req, res) => {
    
    console.log(req.files,"file in uploads");
  
    const uniqueSuffix=""
    const storage = multer.diskStorage({
      destination: function (req, files, cb) {
        cb(null, "./uploads");
      },
      filename: function (req, files, cb) {
         uniqueSuffix = Date.now() + "-" + `${originalname}`+".png";
         console.log(uniqueSuffix,"from the storage");
        cb(null, uniqueSuffix);
      },
    });
  
    console.log(typeof storage);
    const upload = multer({ storage });
   

    console.log(req.body)

    var id 
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var birth_date = req.body.dob_1;
    var address =req.body.address;
    var gender = req.body.gender;
    var phone_number = req.body.contact;
    var relationship = req.body.relationship;
    var state = req.body.state;
    var city = req.body.city;


    var course_name =req.body.course || 0;
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
    var login_token = req.cookies.login_token

    jwt.verify(login_token, "sanjay", function (err, decoded) {
        // console.log(decoded);
        login_user__id = decoded.id[0].id
        console.log(login_user__id)
        });
         console.log(login_user__id);

// basic_information

    con.query(`insert into employee_basic_infomation (reg_id,firstname,lastname,birth_date,address,gender,phone_number,relationship,state,city) values('${login_user__id}','${firstname}','${lastname}','${birth_date}','${address}','${gender}','${phone_number}','${relationship}','${state}','${city}') ;`, function (error, data) {
      if (error) throw error;
      id = data.insertId;
console.log(id);


// education


if(typeof course_name == "string"){
  
  con.query(`insert into education_table (reg_id,employee_id,cource_name,percentage,board_university_name,passout_year) values('${login_user__id}','${id}','${course_name}','${percentage}','${board_university_name}','${passout_year}');`, function (error, data) {
      if (error) throw error;
     
      // console.log(data)
  })
}
else{

  for (let j = 0; j < course_name.length; j++) {
      con.query(`insert into education_table (reg_id,employee_id,cource_name,percentage,board_university_name,passout_year) values('${login_user__id}','${id}','${course_name[j]}','${percentage[j]}','${board_university_name[j]}','${passout_year[j]}');`, function (error, data) {
          if (error) throw error;
          // console.log(data)
      })
  }
}


// reference_master
var sql = `insert into reference_master (reg_id,employee_id,name,number,relationship) values('${login_user__id}','${id}','${name1}','${number1}','${relationship1}'),('${login_user__id}','${id}','${name2}','${number2}','${relationship2}') ;`
console.log(sql);

con.query(sql, function (error, data) {
  if (error) throw error;

})

    })

   
  res.end();
    // res.redirect("/");
  });





module.exports=app
  
