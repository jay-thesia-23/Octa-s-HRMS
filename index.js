const express = require('express')
const mysql2 = require('mysql2')
const body_parser = require('body-parser')
const path = require('path')
const app = express()
const multer=require("./routes/multer")
app.use(body_parser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));
const routes = require('./routes/registration.js')
app.use(routes)

app.use(multer)


app.listen(5000,()=>{
    console.log("Listion Sucesfully!!!!");
})
