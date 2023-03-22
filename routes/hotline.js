const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts') 
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added
var mysql2 = require("mysql2");
const util=require('util');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hrms'
});

connection.connect(function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected database");
    }

});
  
var alldata = util.promisify(connection.query.bind(connection));

app.get('/hotline',async(req, res) => {

    var basicinfo=await alldata(`select firstname,lastname,email,phone_number,city,state,gender,zip_code,birth_date,address,relationship,designation,time_stamp from employee_basic_infomation`);

    // console.log(basicinfo);
    

    res.render('hotline.ejs',{basicinfo});
});

module.exports = app