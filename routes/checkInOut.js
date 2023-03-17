var express = require('express');
var app = express();
app.use(express.json());
var ejs = require('ejs');

app.get("/demo", function(req,res){
    res.render('checkInOut.ejs')
})

module.exports = app