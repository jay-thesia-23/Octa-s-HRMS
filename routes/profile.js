const express = require('express');
const mysql = require('mysql2');
const bodyparser = require('body-parser');
const app = express();
const ejs = require('ejs');
const util=require('util');

const { query } = require('express');
app.use(express.static("public"));

app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hrms'
});

con.connect(function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected database");
    }

});
var allquery = util.promisify(con.query.bind(con));
app.get('/profile', async(req, res) => {
    var employee_id= req.query.id;
    console.log(employee_id);


    var basicdata = await allquery(`select firstname,lastname,email,phone_number,city,state,gender,zip_code,birth_date,address,relationship,designation from employee_basic_infomation where employee_id=1`);
    var educationdata = await allquery(`select course_name,percentage,board_university_name,passout_year from education_table where employee_id=1`);
    var experiencedata=await allquery(`select company_name,designation_company,start_date,end_date from experience_table where employee_id=1`);
    var referencedata=await allquery(`select name,number,relationship from reference_master where employee_id=1`);
    
    
    res.render('profile.ejs', {basicdata,educationdata,experiencedata,referencedata});
       //console.log(educationdata);

    });

module.exports = app