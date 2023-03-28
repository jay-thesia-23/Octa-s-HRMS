const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts); //Added
app.set("layout", "./layouts/main"); //added

const util = require("util");
var jwt = require("jsonwebtoken");

var conn = require("../config/dbConnect");
var alldataquery = util.promisify(conn.query.bind(conn));

var attendanceGet = async (req, res) => {
  // const id=req.query.id;

  let pid = parseInt(req.query.pid) || 1;
  let limit = 2;
  let offset = (pid - 1) * limit;

  if (isNaN(offset)) {
    offset = 0;
  }
  

  // var token = req.cookies.token
  // console.log(token + "tokennnnnnnnnnnnnnnn");

  // jwt.verify(token, 'sanjay', async function (err, decoded) {
  //     // console.log(JSON.stringify(decoded.id) + "decodeeeee");
  //     console.log(decoded.id);

  //     var id = decoded.id;
  // console.log(id + "iddd");

  var checkdata = await alldataquery(
    `select id,status,time from check_master order by id  LIMIT ${offset},${limit}`
  );

  var cntresult = await alldataquery(
    `select count(*) as count from check_master`
  );
  let totalp = Math.ceil(cntresult[0].count / limit);

  //res.render('displaypagi',{data:result,pid:pid,pagearray:totalp});

  var starttime = [];
  var startdate = [];
  var exittime = [];
  var progress = [];

  for (let i = 0; i < checkdata.length; i++) {
    if (checkdata[i].status == "check_in") {
      startdate.push(checkdata[i].time.toJSON("yyyy-mm-dd").slice(0, 10));
      starttime.push(checkdata[i].time.toJSON("HH:MM:SS").slice(11, 18));
    } else {
      exittime.push(checkdata[i].time.toJSON("HH:MM:SS").slice(11, 18));
    }
  }

  for (let i = 0; i < starttime.length; i++) {
    if (exittime[i]) {
      progress.push(diffrence_time(starttime[i], exittime[i]));
    } else {
      progress.push(0);
    }
  }
  
  // console.log(progress);
  //     console.log("start",starttime);
  //     console.log("exit",exittime);
  //     console.log("date",startdate);
  // });

  res.render("attendance", {
    starttime,
    exittime,
    startdate,
    progress,
    pid: pid,
    pagearray: totalp,
  });
};

function diffrence_time(entry_time, exit_time) {
  var h1, h2, m1, m2, s1, s2;
  h1 = entry_time.slice(0, 2);
  h2 = exit_time.slice(0, 2);
  m1 = entry_time.slice(3, 5);
  m2 = exit_time.slice(3, 5);
  s1 = entry_time.slice(6);
  s2 = exit_time.slice(6);

  var h = h2 - h1;
  var m = m2 - m1;
  var s = s2 - s1;

  var totalsec = (h - 1) * 60 * 60 + m * 60 + s;

  var working = Math.floor((totalsec * 100) / (9 * 60 * 60));

  return working;
}

module.exports = { attendanceGet, diffrence_time };
