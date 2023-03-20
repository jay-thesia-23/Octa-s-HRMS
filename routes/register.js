const express = require('express')
const mysql2 = require('mysql2')
const body_parser = require('body-parser')
const bcrypt = require('bcrypt');

const app = express()
const path = require('path')
app.use(body_parser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

var conection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "hrms",
  });

  conection.connect(function(err){
    if(err) throw err
    console.log("Conected Sucesfully!!!!")
  })

  app.get("/register", (req,res)=>{
    res.render("register.ejs")
  })

  

  module.exports = app
