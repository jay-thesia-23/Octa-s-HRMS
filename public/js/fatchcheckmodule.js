async function fatchcheckmodule() {
  fetch("/abc", {
    method: "get",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data[0].time.slice(11,18))
      var timecheckin = data[0].time.slice(11, 18);
      var hours = timecheckin.slice(0, 2);
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = hours - 1;

      if (hours < 10) {
        hours = "0" + hours;
      }

      var minutes = timecheckin.slice(3, 5);
      // console.log((hours),minutes);

      var check = document.getElementById("ThankYou");
      // console.log("indivision!!!!");

      var div = document.createElement("div");
      div.setAttribute("class", "green");
      div.innerHTML = "Check In " + hours + ":" + minutes;

      check.append(div);
      document.getElementById("check_in").disabled = true;
      document.getElementById("check_out").disabled = false;
      document.getElementById("breck_in").disabled = false;
      document.getElementById("breck_out").disabled = true;
    });
}

async function fatchbreckin() {
  fetch("/brc_in", {
    method: "get",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      var check = document.getElementById("ThankYou");

      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].time.slice(11,18))
        var timecheckin = data[i].time.slice(11, 18);
        var hours = timecheckin.slice(0, 2);
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours - 1;

        if (hours < 10) {
          hours = "0" + hours;
        }

        var minutes = timecheckin.slice(3, 5);
        // console.log((hours),minutes);

        // console.log("indivision!!!!");
        var div = document.createElement("div");
        if (i % 2 == 0) {
          div.setAttribute("class", "yellow");
          div.innerHTML = "Breck In " + hours + ":" + minutes;
          check.append(div);
          document.getElementById("check_in").disabled = true;
          document.getElementById("check_out").disabled = true;
          document.getElementById("breck_in").disabled = true;
          document.getElementById("breck_out").disabled = false;
        } else {
          div.setAttribute("class", "saffron");
          div.innerHTML = "Breck Out " + hours + ":" + minutes;
          check.append(div);
          document.getElementById("check_in").disabled = true;
          document.getElementById("check_out").disabled = false;
          document.getElementById("breck_in").disabled = false;
          document.getElementById("breck_out").disabled = true;
        }
      }
    });
}

async function fatchchkout() {
  fetch("/chk_out", {
    method: "get",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      var timecheckin = data[1].time.slice(11, 18);
      var hours = timecheckin.slice(0, 2);
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = hours - 1;

      if (hours < 10) {
        hours = "0" + hours;
      }

      var minutes = timecheckin.slice(3, 5);

      var check = document.getElementById("ThankYou");
      var check_out = document.getElementById("attendenceEntry");
      check_out.hidden = false;

      var div = document.createElement("div");
      div.setAttribute("class", "red");
      div.innerHTML = "Check Out " + hours + ":" + minutes;
      check.append(div);
      check_out.innerHTML = "Thank You!!!!!";
      document.getElementById("check_in").disabled = false;
      document.getElementById("check_out").disabled = true;
      document.getElementById("breck_in").disabled = true;
      document.getElementById("breck_out").disabled = true;
    });
}
