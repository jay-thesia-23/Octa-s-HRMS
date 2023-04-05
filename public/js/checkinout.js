var check_in = document.getElementById("check_in");
var check_out = document.getElementById("check_out");
var breck_in = document.getElementById("breck_in");
var breck_out = document.getElementById("breck_out");

function autoUnable() {
  var time = new Date();
  var hour = time.getHours();

  if (hour == 0) {
    document.getElementById("check_in").disabled = false;
    document.getElementById("check_out").disabled = true;
    document.getElementById("breck_in").disabled = true;
    document.getElementById("breck_out").disabled = true;
  }
}

autoUnable();

function demo() {
  document.getElementById("attendanceRecord").hidden = false;
  document.getElementById("check_in").disabled = true;
  document.getElementById("check_out").disabled = false;
  document.getElementById("breck_in").disabled = false;
  document.getElementById("breck_out").disabled = true;
  var check = document.getElementById("time_box");

  const d = new Date();
  var s = d.getHours();
  var m = d.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }

  s = s % 12;
  s = s ? s : 12;

  var timeIn12HourFormat = s + ":" + m;

  var div = document.createElement("div");
  div.setAttribute("class", "green");
  div.innerHTML = "Check In " + timeIn12HourFormat;

  check.append(div);
}

function chk_out() {
  document.getElementById("check_in").disabled = false;
  document.getElementById("check_out").disabled = true;
  document.getElementById("breck_in").disabled = true;
  document.getElementById("breck_out").disabled = true;
  var check = document.getElementById("time_box");
  //   var check_out = document.getElementById("attendenceEntry");
  //   check_out.hidden = false;

  const d = new Date();
  var s = d.getHours();
  var m = d.getMinutes();

  s = s % 12;
  s = s ? s : 12;
  if (m < 10) {
    m = "0" + m;
  }

  var timeIn12HourFormat = s + ":" + m;
  console.log(timeIn12HourFormat + "timein 12");

  var div = document.createElement("div");
  div.setAttribute("class", "checkOutColor");
  div.innerHTML = "Check Out " + timeIn12HourFormat;

  check.append(div);
}

function breck() {
  document.getElementById("check_in").disabled = true;
  document.getElementById("check_out").disabled = true;
  document.getElementById("breck_in").disabled = true;
  document.getElementById("breck_out").disabled = false;
  var check = document.getElementById("time_box");

  const d = new Date();
  var s = d.getHours();
  var m = d.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }

  s = s % 12;
  s = s ? s : 12;

  var timeIn12HourFormat = s + ":" + m;
  console.log(timeIn12HourFormat);

  var div = document.createElement("div");
  div.setAttribute("class", "breckInColor");
  div.innerHTML = "break In " + timeIn12HourFormat;

  check.append(div);
}

function brc_out() {
  document.getElementById("check_in").disabled = true;
  document.getElementById("check_out").disabled = false;
  document.getElementById("breck_in").disabled = false;
  document.getElementById("breck_out").disabled = true;
  var check = document.getElementById("time_box");

  const d = new Date();
  var s = d.getHours();
  var m = d.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }

  s = s % 12;
  s = s ? s : 12;

  var timeIn12HourFormat = s + ":" + m;
  console.log(timeIn12HourFormat);

  var div = document.createElement("div");
  div.setAttribute("class", "breakOutColor");
  div.innerHTML = "break Out " + timeIn12HourFormat;

  check.append(div);
}

async function checkin() {
  fetch("/check_in", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {});
}

async function checkout() {
  fetch("/check_out", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {});
}

async function breckin() {
  fetch("/breck_in", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {});
}

async function breckout() {
  fetch("/breck_out", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {});
}
