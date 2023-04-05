// function autoUnable(){

//   console.log("autoUnable");

//     var time = new Date();
//      var hour = time.getHours();

//      console.log(hour);
//      console.log("in function0");
//     if(hour==0){

//       document.getElementById("check_in").disabled = false;
//       document.getElementById("check_out").disabled = true;
//       document.getElementById("breck_in").disabled = true;
//       document.getElementById("breck_out").disabled = true;
//     }

// }

// document.cookie = `tz=${tz}`;

var tzcookie=document.cookie
var tz

let arraycookie = tzcookie.split(';');
console.log(arraycookie);

for(let i=0;i<arraycookie.length;i++){
let currString=arraycookie[i].replace(/ /g, "").split("=")
console.log( typeof currString,"currstring");

if(currString[0]=="tz"){
tz=currString[1]
console.log(tz,"inside if");

}
}
tz=Number(tz)
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

    
      if(hours=="00"){
        hours="12";
      }

      var minutes = timecheckin.slice(3, 5);


   

      var check = document.getElementById("time_box");
      // console.log("indivision!!!!");
      

      var div = document.createElement("div");

      div.setAttribute("class", "green");
      div.innerHTML = "Check In " + moment(data[0].time).utc().utcOffset(tz).format("hh:mm");

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
  
      var check = document.getElementById("time_box");

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

      
        if(hours=="00"){
          hours="12";
        }
        var minutes = timecheckin.slice(3, 5);
     
        var div = document.createElement("div");
        if (i % 2 == 0) {
          div.setAttribute("class", "breckInColor");

          div.innerHTML = "Breck In " + moment(data[i].time).utc().utcOffset(tz).format("hh:mm");
          check.append(div);
          document.getElementById("check_in").disabled = true;
          document.getElementById("check_out").disabled = true;
          document.getElementById("breck_in").disabled = true;
          document.getElementById("breck_out").disabled = false;
        } else {
          div.setAttribute("class", "breakOutColor");
          div.innerHTML = "Breck Out " + moment(data[i].time).utc().utcOffset(tz).format("hh:mm");
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


      var timecheckin = data[0].time.slice(11, 18);
      var dateOfToday=data[0].time.slice(0,10)

      var hours = timecheckin.slice(0, 2);
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = hours - 1;

      

      if (hours < 10) {
        hours = "0" + hours;
      }

  
      if(hours=="00"){
        hours="12";
      }
      var minutes = timecheckin.slice(3, 5);

      var check = document.getElementById("time_box");
      // var check_out = document.getElementById("attendenceEntry");
      // check_out.hidden = false;

      var div = document.createElement("div");


      div.setAttribute("class", "checkOutColor");
      div.innerHTML = "Check Out " + moment(data[0].time).utc().utcOffset(tz).format("hh:mm");
      check.append(div);
      // check_out.innerHTML = "Thank You!!!!!";


      var time = new Date();
      var hour = time.getHours();

     
   

      var date=new Date();
      var dateValue=date.getDate();
      var monthValue=date.getMonth()+1;
      monthValue="0"+monthValue
      var yearValue=date.getFullYear()

      if(dateValue<10){
        dateValue="0"+dateValue
      }

      var TodayDates=yearValue+"-"+monthValue+"-"+dateValue

    
      
      if (dateOfToday==TodayDates) {
        document.getElementById("check_in").disabled = true;
        document.getElementById("check_out").disabled = true;
        document.getElementById("breck_in").disabled = true;
        document.getElementById("breck_out").disabled = true;
      }else{
        document.getElementById("check_in").disabled = false;
        document.getElementById("check_out").disabled = true;
        document.getElementById("breck_in").disabled = true;
        document.getElementById("breck_out").disabled = true;
      }
    });
}
