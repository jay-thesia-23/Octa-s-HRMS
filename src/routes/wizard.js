var mysql = require("mysql2");
var express = require("express");
var path = require("path");
var app = express();
app.set("view engine", "ejs");

var bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var cookieParser = require("cookie-parser");
// app.use(cookieParser());
var jwt = require("jsonwebtoken");

var path = require("path");

var router = express.Router();
app.use(cookieParser());



app.set("views", path.join(__dirname, "../views"));
const {
  wizardGet,
  wizardPost,
  Inemail,
  courceGet,
  testApiGet,
  upload
} = require("../controller/wizard");

const expressLayouts = require("express-ejs-layouts");
const { authentication } = require("../middleware/authMiddleware");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); 

var router = express.Router();

app.get("/wizard",authentication, wizardGet);

app.get("/test-api",authentication, testApiGet);

app.get("/cource",authentication, courceGet);

var middlewareArr={
  uploadsMulter:(req,res,next)=>{
    upload.fields([
      { name: "profilePic", maxCount: 1 },
      {
        name: "adhar",
        maxCount: 1,
      },
      {
        name: "resume",
        maxCount: 1,
      },
      {
        name: "cheque",
        maxCount: 1,
      },
      {
        name: "others",
        maxCount: 1,
      },
    ])

    next();
  },
  
}
app.post(
  "/wizard",
  [upload.fields([
    { name: "profilePic", maxCount: 1 },
    {
      name: "adhar",
      maxCount: 1,
    },
    {
      name: "resume",
      maxCount: 1,
    },
    {
      name: "cheque",
      maxCount: 1,
    },
    {
      name: "others",
      maxCount: 1,
    },
  ]),authentication],
  wizardPost
);

module.exports = app;
