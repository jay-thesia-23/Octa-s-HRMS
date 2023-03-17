var express = require('express');
var app = express();
app.use(express.json());



const register = require('../hrms/routes/register')
app.use(register)
const login = require('../hrms/routes/login')
app.use(login)








app.listen(6600, () => {
    console.log("app listion on 6600 port");
})