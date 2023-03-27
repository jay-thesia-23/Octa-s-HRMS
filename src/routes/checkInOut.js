var express = require('express');
var app = express();
app.use(express.json());

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.static("public"));

var  {checkInOutGet,checkInPost,checkOutPost,breakInPost,breakOutPost}=require("../controller/checkInOut")

var {authentication}=require("../middleware/authMiddleware")
app.get("/demo",authentication,checkInOutGet)

app.post('/check_in',authentication,checkInPost)

app.post('/check_out',authentication, checkOutPost)

app.post('/breck_out',authentication, breakOutPost)

app.post('/breck_in',authentication, breakInPost)

app.get('/token', function (req, res) {
    var test = req.cookies.login_token
    // console.log(test);
})

module.exports = app