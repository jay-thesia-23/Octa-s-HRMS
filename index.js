var express = require('express');
var app = express();
app.use(express.json());



const register = require('../hrms/routes/register')
app.use(register)
const login = require('../hrms/routes/login')
app.use(login)
const demo = require('./routes/checkInOut')
app.use(demo)








app.listen(5000, () => {
    console.log("app listion on 5000 port");
})