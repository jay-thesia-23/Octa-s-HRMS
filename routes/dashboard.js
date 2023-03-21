const express = require('express');
const mysql = require('mysql2');
const bodyparser = require('body-parser');
const app = express();
const ejs = require('ejs');
const util=require('util');

const { query } = require('express');
app.use(express.static("public"));

app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// app.get('/dashboard', async(req, res) => {
//     res.render('dashboard.ejs');
// });

// const dotenv = require('dotenv');



// app.listen(9876,()=>{
//     console.log("Server Started --> http://localhost:9876/")
// });
app.get('/dashboard',(req,res)=>{
    res.render('dashboard.ejs');
})

module.exports = app

