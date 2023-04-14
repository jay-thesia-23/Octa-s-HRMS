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
var {wizardFill}=require("../middleware/noWizard")
var multer = require("multer");
var { authentication } = require("../middleware/authMiddleware");


app.get("/edit_profile", [authentication,wizardFill], editProfileGet);

var uniqueSuffix = "";
const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, "./uploads");
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
  [upload.single( "profilePic"), authentication],
  editProfilePost
);

module.exports = app;
