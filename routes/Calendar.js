let express = require("express");
let bodyParser = require('body-parser')
let ejs = require('ejs');
const dotenv = require('dotenv');
let route = express.Router()

module.exports = route;

route.get('',(req, res)=>{ 
    res.render('pages/Calendar');
});
