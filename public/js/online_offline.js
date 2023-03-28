async function online() {
  window.location.replace("/hotline/online");
}

async function offline() {
  window.location.replace("/hotline/offline");
  console.log("ofline");
}

async function employee_activity() {
  fetch("/employee_activity", {
    method: "get",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      var check = document.getElementById("employee");
      check.innerHTML = "";

      for (var s = 0; s < data.length; s++) {
        var timecheckin = data[s].time.slice(11, 18);
        var hours = timecheckin.slice(0, 2);
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours - 1;

        if (hours < 10) {
          hours = "0" + hours;
        }
        var minutes = timecheckin.slice(3, 5);

        var div = document.createElement("div");
        if (data[s].status == "breck_in") {
          div.setAttribute("class", "yellow");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            hours +
            ":" +
            minutes;
          check.append(div);
        } else if (data[s].status == "breck_out") {
          div.setAttribute("class", "saffron");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            hours +
            ":" +
            minutes;
          check.append(div);
        } else if (data[s].status == "check_in") {
          div.setAttribute("class", "green");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            hours +
            ":" +
            minutes;
          check.append(div);
        } else if (data[s].status == "check_out") {
          div.setAttribute("class", "red");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            hours +
            ":" +
            minutes;
          check.append(div);
        }
      }
    });
}

async function search() {
  const name = document.getElementById("search").value;
  console.log(name);

  fetch(`/search?name=${name}`, {
    method: "get",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      var check = document.getElementById("employee");
      check.innerHTML = "";

      for (var s = 0; s < data.length; s++) {
        var timecheckin = data[s].time.slice(11, 18);
        var hours = timecheckin.slice(0, 2);
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours - 1;

        if (hours < 10) {
          hours = "0" + hours;
        }
        var minutes = timecheckin.slice(3, 5);

        var div = document.createElement("div");
        if (data[s].status == "breck_in") {
          div.setAttribute("class", "yellow");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            hours +
            ":" +
            minutes;
          check.append(div);
        } else if (data[s].status == "breck_out") {
          div.setAttribute("class", "saffron");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            hours +
            ":" +
            minutes;
          check.append(div);
        } else if (data[s].status == "check_in") {
          div.setAttribute("class", "green");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            hours +
            ":" +
            minutes;
          check.append(div);
        } else if (data[s].status == "check_out") {
          div.setAttribute("class", "red");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            hours +
            ":" +
            minutes;
          check.append(div);
        }
      }
    });
}
