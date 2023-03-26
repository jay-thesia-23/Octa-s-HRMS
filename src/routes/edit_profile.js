var mysql = require("mysql2");
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.json());
var bodyParser = require("body-parser");

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "../views/layouts/main"); //added
var path = require("path");
app.set("views", path.join(__dirname, "../views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var cookieParser = require("cookie-parser");
// app.use(cookieParser());
var jwt = require("jsonwebtoken");

app.use(cookieParser());
var { editProfileGet, editProfilePost } = require("../controller/edit_profile");
var multer = require("multer");

app.get("/edit_profile", editProfileGet);

var uniqueSuffix = "";
const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, files, cb) {
    uniqueSuffix = `${Date.now()}-${files.originalname}`;
    console.log(uniqueSuffix, "from the storage");
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

app.post(
  "/wizard_edit",
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
  ]),
  editProfilePost
);

module.exports = app;
