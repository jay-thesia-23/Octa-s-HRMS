const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts') 
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added


app.get('/hotline', (req, res) => {
    res.render('hotline.ejs', { title: 'Hoteline Page' })
})

module.exports = app