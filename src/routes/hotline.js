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
  hotlineSearchGet,
  hotOfflineSearchGet
} = require("../controller/hotline");
var router = express.Router();
var { authentication } = require("../middleware/authMiddleware");

var {wizardFill}=require("../middleware/noWizard")

app.get("/hotline", [authentication,wizardFill], hotlineGet);
app.get("/hotline/online",[authentication,wizardFill], hotlineOnlineGet);
app.get("/hotline/offline",[authentication,wizardFill], hotlineOfflineGet);
app.get("/hotsearch",authentication,hotlineSearchGet)
app.get("/hotoffsearch",authentication,hotOfflineSearchGet)

module.exports = app;
