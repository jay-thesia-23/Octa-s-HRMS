var express = require("express");
var bodyparser = require("body-parser");

var app = express();

app.use(express.json({limit: '50mb'}));
const session = require("express-session");
app.set("view engine", "ejs");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.set("views",path.join(__dirname,"src/views"))

app.use(express.static(path.join(__dirname, "uploads")))

var conn = require("./src/config/dbConnect");

// app.use(
//   session({
//     name: "session_id",
//     secret: "your-secret-key",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24,
//     },
//   })
// );

app.use(express.static("uploads"));
const register = require("./src/routes/register");
app.use(register);

const login = require("./src/routes/login");
app.use(login);

const checkInOut = require("./src/routes/checkInOut");
app.use(checkInOut);

const home = require("./src/routes/home");
app.use(home);

const profile = require("./src/routes/profile");
app.use(profile);

const routes2 = require("./src/routes/attendance");
app.use(routes2);

const routes3 = require("./src/routes/hotline");
app.use(routes3);

var wizard = require("./src/routes/wizard");
app.use(wizard);

const leaves = require("./src/routes/leaves");
app.use(leaves);

var editprofile=require("./src/routes/edit_profile")
app.use(editprofile)

var showprofile=require("./src/routes/showProfile")
app.use(showprofile)

var comment=require("./src/routes/comment")
app.use(comment)
var fatchapi = require("./src/routes/check_module_fatchapi")
app.use(fatchapi)

var fetchcmt = require("./src/routes/fetch_comment")
app.use(fetchcmt);

var forgotPass=require("./src/routes/forgotPass")
app.use(forgotPass)

var forgotPasschange=require("./src/routes/forgotpasschange")
app.use(forgotPasschange)

var logout=require("./src/routes/logout")
app.use(logout)

app.use((req, res, next) => {
  res.render("page404",{layout:false})
})

app.listen(5000, () => {
  console.log("app listening on 5000 port");
});

