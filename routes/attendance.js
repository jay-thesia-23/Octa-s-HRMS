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
  
var alldataquery = util.promisify(connection.query.bind(connection));

app.get('/attendance', async(req, res) => {

    // var data=await alldataquery(`select * from check_master`);
    res.render('attendance', { title: 'Attendance Page' })
})


module.exports = app

