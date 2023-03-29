const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "../views/layouts/main");
var mysql2 = require("mysql2");
const util = require("util");
var jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
app.use(cookieParser());

var path = require("path");
app.set("views", path.join(__dirname, "../views"));

var router = express.Router();
var conn = require("../config/dbConnect");
var {
  hotlineGet,
  hotlineOfflineGet,
  hotlineOnlineGet,
} = require("../controller/hotline");
var router = express.Router();
var { authentication } = require("../middleware/authMiddleware");

app.get("/hotline", authentication, hotlineGet);
app.get("/hotline/online",authentication, hotlineOnlineGet);
app.get("/hotline/offline",authentication, hotlineOfflineGet);
module.exports = app;
