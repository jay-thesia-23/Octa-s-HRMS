const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)   //Added
app.set('layout', './layouts/main') //added

app.get('/', (req, res) => {
    res.render('dashboard.ejs', { title: 'Home Page' })
})

module.exports = app