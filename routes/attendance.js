const express = require('express');
const mysql2 = require('mysql2');
const app = express();
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added
// var alldataquery = util.promisify(con.query.bind(con));


app.get('/attendance', async(req, res) => {

    // var data=await alldataquery(`select * from check_master`);
    res.render('attendance', { title: 'Attendance Page' })
})

module.exports = app