var express = require('express');
var app = express();
app.use(express.json());
var ejs = require('ejs');

const bcrypt = require('bcrypt');


app.use(express.static('css'));
app.use(express.static('images'));

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var mysql = require('mysql2');

var cookieParser = require('cookie-parser');
// app.use(cookieParser());
var jwt = require('jsonwebtoken')

app.use(cookieParser());

app.use("/public", express.static("public"));


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hrms'
});
con.connect((err) => {
    if (err) throw err;
    console.log(" database connected ")
});
app.get('/login', (req, res) => {

    res.render('login.ejs', {})
})

async function Inemail(email) {
    return await new Promise((res, rej) => {
        con.query(`select * from registration where u_email='${email}';`, (err, data) => {
            if (err) throw err;
            res(data);
            console.log(data.length);

        })
    })
}

app.post('/login', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    var data = await Inemail(email);
    // console.log(data)

    if (data.length != 0) {
        async function compare_psw(password, data) {
            return await new Promise((res, rej) => {
                bcrypt.compare(password, data[0].u_password, (err, isMatch) => {
                    if (err) {
                        return err;
                    }
                    res(isMatch)
                   
                })
            })
        }
        var isMatch = await compare_psw(password, data);
        console.log(isMatch);
        if (isMatch == true) {
            console.log(data[0].isactive);
            // console.log(data);
            const token = jwt.sign({ email }, 'sanjay');
            // console.log("token!..........." ,token);
            res.cookie("token", token);
            console.log("active flag ....................................");
            // console.log(data[0].isactive);

            if (data[0].isactive == '1') {
                res.send('wait for some min')
            }
             else {

                res.send("login success")
            }

        }
        else if (!isMatch) {
            return res.send(`Either email or password Wrong!..........<br><a href="/login"> Back to Login </a> `)

          
        }
    }
    else {
        // res.json(false)
        res.redirect('/login')
        console.log('your password is not matched ');
    }


});
module.exports = app, {Inemail};