let express = require("express");
let bodyParser = require('body-parser')
let ejs = require('ejs');
const dotenv = require('dotenv');
let Cal = require('./Calendar.js')
let app = express();
app.use('/Calender', Cal);

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/Imgs'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

let server1 = app.listen(9876,()=>{
    console.log("Server Started --> http://localhost:9876/")
});
app.get('',(req,res)=>{
    res.render('Dashboard.ejs')
})

