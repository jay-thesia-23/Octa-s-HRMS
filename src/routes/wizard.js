var express = require("express");
const session = require("express-session");
var app = express();
app.use(express.json());
const bcrypt = require("bcrypt");
app.use(express.static("css"));
app.use(express.static("images"));
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
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
