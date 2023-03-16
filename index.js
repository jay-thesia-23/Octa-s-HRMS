const express = require('express')
const mysql2 = require('mysql2')
const body_parser = require('body-parser')
const path = require('path')
const app = express()
app.use(body_parser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));
const routes = require('../HRMS/routes/registration')
app.use(routes)


app.listen(9004)
console.log("Listion Sucesfully!!!!");