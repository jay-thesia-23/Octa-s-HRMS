// const express = require('express');
// const mysql = require('mysql2');
// const bodyparser = require('body-parser');
// const app = express();
// const ejs = require('ejs');
// const util=require('util');
// // const bcryptjs = require("bcryptjs");
// // const jwt=require('jsonwebtoken');
// // const cookieParser = require('cookie-parser');
// const { query } = require('express');
// app.use(express.static("public"));

// //routes
// const routes = require('../hrms/routes/profile');
// app.use(routes);

// const routes2 = require('../hrms/routes/dashboard');
// app.use(routes2);

// const routes3 = require('../hrms/routes/home');
// app.use(routes3);


// app.use(express.json());
// app.set('view engine', 'ejs');
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: false }));

// app.get('/wizard',(req,res)=>{
//     res.render('wizard.ejs');
// });

// app.get('/attendance',(req,res)=>{
//     res.render('attendance.ejs');
// });

// app.get('/hotline',(req,res)=>{
//     res.render('hotline.ejs');
// });

// app.listen(7070, (err) => {
//     console.log('server connected at 7070');
// });



const express = require('express')
// const mysql = require('mysql2');
const expressLayouts = require('express-ejs-layouts')  //Added
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
app.use(expressLayouts)   //Added
app.set('view engine', 'ejs')
app.set('layout', './layouts/main') //added
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Routes
const routes1 = require('../hrms/routes/routes');
app.use(routes1);

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))
