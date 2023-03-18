var express = require('express');
var app = express();
app.use(express.json());

const { query } = require('express');
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


const register = require('../hrms/routes/register')
app.use(register)
const login = require('../hrms/routes/login')
app.use(login)


const routes = require('../hrms/routes/profile');
app.use(routes);

const routes2 = require('../hrms/routes/dashboard');
app.use(routes2);


app.get('/wizard',(req,res)=>{
    res.render('wizard.ejs');
});

app.get('/attendance',(req,res)=>{
    res.render('attendance.ejs');
});

app.get('/hotline',(req,res)=>{
    res.render('hotline.ejs');
});

app.listen(5000, () => {
    console.log("app listion on 5000 port");
})
