const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const app = express();
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added

app.get('/attendance', (req, res) => {
    res.render('attendance', { title: 'Attendance Page' })
})

app.get('/home', (req, res) => {
    res.render('home', { title: 'Home Page' })
})

app.get('/hotline', (req, res) => {
    res.render('hotline', { title: 'Hoteline Page' })
})

module.exports = app