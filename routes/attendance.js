const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added

app.get('/attendance', (req, res) => {
    res.render('attendance', { title: 'Attendance Page' })
})

module.exports = app