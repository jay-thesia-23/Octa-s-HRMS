const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts') 
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added

const profile=require("./profile")
app.use(profile)

app.get('/calendar', (req, res) => {
    res.render('calendar.ejs', { title: 'calendar Page' })
})

module.exports = app