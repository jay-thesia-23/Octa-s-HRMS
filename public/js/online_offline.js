async function online() {
  window.location.replace("/hotline/online");
}

async function offline() {
  window.location.replace("/hotline/offline");
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
          div.setAttribute("class", "yellow_activity");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            moment(data[s].time).utc().utcOffset(tz).format("hh:mm");
          check.append(div);
        } else if (data[s].status == "breck_out") {
          div.setAttribute("class", "saffron_activity");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            moment(data[s].time).utc().utcOffset(tz).format("hh:mm");
          check.append(div);
        } else if (data[s].status == "check_in") {
          div.setAttribute("class", "green_activity");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            moment(data[s].time).utc().utcOffset(tz).format("hh:mm");
          check.append(div);
        } else if (data[s].status == "check_out") {
          div.setAttribute("class", "red_activity");
          div.innerHTML =
            data[s].firstname +
            "  " +
            data[s].lastname +
            "  " +
            data[s].status +
            "  " +
            moment(data[s].time).utc().utcOffset(tz).format("hh:mm");
          check.append(div);
        }
      }
    });
}

async function search() {
  const name = document.getElementById("search").value;

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
          div.setAttribute("class", "yellow_activity");
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
          div.setAttribute("class", "saffron_activity");
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
          div.setAttribute("class", "green_activity");
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
          div.setAttribute("class", "red_activity");
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

async function hotSearch() {
  const search = document.getElementById("search").value;

  fetch(`/hotsearch?search=${search}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res, "response");

      let s="";
      let searchCard = document.getElementById("searchCard");
      searchCard.innerHTML=""

      
      for (let i = 0; i < res.length; i++) {
        s += `<div class="ag-courses_item box_shadow_2">
          <a href="/showprofile?id=${res[i]?.reg_id}" class="ag-courses-item_link" id="card${i}">
            <div class="ag-courses-item_bg"></div>

            <div>
              <div class="row pti_rel_2">
                <div class="col">
                  <div class="jst_ctr">

                   
                    
                      <div class="img1"><img class="img" src="/${res[i].profile_pic}"></div>
                       
                  </div>
                </div>
                <div class="col">
                  <div>
                    <div class="mb_10">
                      <div class="date_of_hire">
                        <p>Date of hire</p>
                      </div>
                      <div class="clr_wht">
                        <p> ${res[i].time_stamp} </p>
                      </div>
                    </div>
                    <div>
                      <div class="date_of_hire">
                        <p>Department</p>
                      </div>
                      <div class="clr_wht">
                        <p>Development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="crd_emp_name">
                  <p>   ${res[i].firstname} </p>
                </div>
              </div>

              <div class="pti_rel_2">
                <div class="crd_designation">
                  <p> ${res[i].designation}</p>
                </div>
              </div>

              <div class="display_flex crd_mail_aln">
                <div class="mr_8 clr_tomato"><i class="fa fa-envelope"></i></div>
                <div class="clr_drk_grey">
                  <p> ${res[i].email} </p>
                </div>
              </div>

              <div class="display_flex crd_mail_aln">
                <div class="mr_8 clr_tomato"><i class="fa fa-mobile-phone" style="font-size:30px"></i>
                </div>
                <div class="clr_drk_grey">${res[i].phone_number}</div>
              </div>
            </div>

          
          </a>
        </div>`;
      }
      console.log(s, "current");
      searchCard.innerHTML = s;
    });
}


