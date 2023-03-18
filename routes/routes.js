const express = require('express');
const app = express();

app.get('/attendance', (req, res) => {
    res.render('attendance', { title: 'Attendance Page' })
})

app.get('/home', (req, res) => {
    res.render('home.ejs', { title: 'Home Page' })
})

app.get('/hotline', (req, res) => {
    res.render('hotline.ejs', { title: 'Hoteline Page' })
})

module.exports = app