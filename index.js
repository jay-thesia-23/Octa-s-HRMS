const express = require('express')
// const mysql = require('mysql2');
 //Added
const bodyparser = require('body-parser');
const ejs = require('ejs');
const app = express()
// const bcryptjs = require("bcryptjs");
// const jwt=require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
const util = require('util');
const port = 8484

// Static Files
const { query } = require('express');
app.use(express.static('public'))
// Example for other folders - not required
// app.use('/css', express.static(__dirname + 'public/css'))

// Set Templating Engine
app.use(express.json());
 //Added
app.set('view engine', 'ejs')
//added
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Routes
const routes1 = require('../hrms/routes/home');
app.use(routes1);

const routes2 = require('../hrms/routes/attendance');
app.use(routes2);

const routes3 = require('../hrms/routes/hotline');
app.use(routes3);

// Listen on Port
app.listen(port, () => console.info(`App listening on port ${port}`))
