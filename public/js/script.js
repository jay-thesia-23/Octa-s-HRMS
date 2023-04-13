

// document.cookie = tz=${tz};

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const nextBtns2 = document.querySelectorAll(".btn2-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
var isvalidate = true;
let formStepsNum = 0;

var x = document.cookie;
var complete_url = "";


let decodedCookie = decodeURIComponent(x);
let ca = decodedCookie.split(";");


for (let i = 0; i < ca.length; i++) {
  let currString = ca[i].split("=");

  if (currString[0] == "om") {
    complete_url = currString[1];
    
  }
}

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    var currRegister1 = registerPage1();

    

    if (currRegister1) {
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    }
  });
});
nextBtns2.forEach((btn) => {
  btn.addEventListener("click", () => {
    var currRegister2 = registerPage2();

    

    if (currRegister2) {
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    }
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}



async function select(state_id) {
  const ans = await fetch(
    `${complete_url}/test-api?state_id=${state_id.value}`
  );


  const data = await ans.json();
 
  var city_1 = document.getElementById("city");
  city_1.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const option = new Option(data[i].city_name, data[i].city_name);
    city_1.add(option);
  }
}

function registerPage1() {
  
  registerPage5();

  var fname = document.getElementById("fname").value || "";
  var lname = document.getElementById("lname").value || "";
  var dob = document.getElementById("dob_1").value || "";
  var address = document.getElementById("address").value || "";
  var contact = document.getElementById("contact").value || "";
  var state = document.getElementById("state").value || "";
  var validRegex =
          /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;


  var email=document.getElementById("email").value || ""
  var designation=document.getElementById("designation").value || ""
  var department=document.getElementById("department").value || ""  

  var relationship = document.getElementById("relationship").value || "";
  //var gender = document.getElementById('gender').value || "";
  var city = document.getElementById("city").value || "";
  var isvalidate = true;

  if (fname == null || fname == "" || !isNaN(fname)) {
    document.getElementById("fname-error").innerHTML = "Please enter username";
    isvalidate = false;
  } else {
    document.getElementById("fname-error").innerHTML = "";
  }

  if (designation == null || designation == "" || !isNaN(designation)) {
    document.getElementById("designation-error").innerHTML = "Please enter Designation";
    isvalidate = false;
  } else {
    document.getElementById("designation-error").innerHTML = "";
  }

  if (department == null || department == "" || !isNaN(department)) {
    document.getElementById("department-error").innerHTML = "Please enter Department";
    isvalidate = false;
  } else {
    document.getElementById("department-error").innerHTML = "";
  }

  if (lname == null || lname == ""  || !isNaN(lname)) {
    document.getElementById("lname-error").innerHTML = "Please enter lname";
    isvalidate = false;
  } else {
    document.getElementById("lname-error").innerHTML = "";
  }

  if (dob == null || dob == "") {
    document.getElementById("dob-error").innerHTML =
      "Please fill date of birth";
    isvalidate = false;
  } else {
    document.getElementById("dob-error").innerHTML = "";
  }

  if (address == null || address == "") {
    document.getElementById("address-error").innerHTML = "Please enter address";
    isvalidate = false;
  } else {
    document.getElementById("address-error").innerHTML = "";
  }

  if (contact == null || contact == "") {
    document.getElementById("contact-error").innerHTML =
      "Please enter contact number";
    isvalidate = false;
  } else if (isNaN(contact)) {
    document.getElementById("contact-error").innerHTML =
      "Please enter valid contact number";
    isvalidate = false;
  } else {
    document.getElementById("contact-error").innerHTML = "";
  }


  if (!email.match(validRegex)) {
    document.getElementById("email-error").innerHTML = "Enter Correct email_id .....";
    isvalidate= false;
  }

  
  if (state.length <= 0) {
    document.getElementById("state-error").innerHTML = "Please select state";
    isvalidate = false;
  } else {
    document.getElementById("state-error").innerHTML = "";
  }


  if (city == null || city == "") {
    document.getElementById("city-error").innerHTML = "Please select city";
    isvalidate = false;
  } else {
    document.getElementById("city-error").innerHTML = "";
  }

  if (relationship == 0) {
    document.getElementById("relationship-error").innerHTML =
      "Please select relationship status";
    isvalidate = false;
  } else {
    document.getElementById("relationship-error").innerHTML = "";
  }

  console.log(isvalidate);
  return isvalidate;
}

function registerPage2() {

  var uni = document.getElementById("uni").value || "";
  var passyear = document.getElementById("passyear").value || "";
  var percent = document.getElementById("percent").value || "";

  var isvalidate = true;

  if (uni == null || uni == "") {
    document.getElementById("uni-error").innerHTML =
      "Please enter university/college";
    isvalidate = false;
  } else {
    document.getElementById("uni-error").innerHTML = "";
  }

  if (passyear == null || passyear == "") {
    document.getElementById("year-error").innerHTML =
      "Please enter passing year";
    isvalidate = false;
  } else {
    document.getElementById("year-error").innerHTML = "";
  }

  if (percent == null || percent == "") {
    document.getElementById("percent-error").innerHTML =
      "Please enter percentage";
    isvalidate = false;
  } else {
    document.getElementById("percent-error").innerHTML = "";
  }

  return isvalidate;
}

function registerPage5() {
  var file = document.getElementsByClassName("file");
  var docerror = document.getElementById("doc-error");

 
  for (let i = 0; i < file.length; i++) {
    if (file[i].files.length == 0) {
      docerror.innerHTML = "please fill  all the file";
      
      return false;
    } else {
      docerror.innerHTML = "";
    }
  }

  return true;
}

var clk = 1;
async function education() {
  var k;
  const ans = await fetch(`${complete_url}/cource`);

  const data2 = await ans.json();

  var table2 = document.getElementById("add");
  var v2 = document.createElement("div");
  var s = "";
  if (clk <= 10) {
    s +=
      "<div id='education' name='edu'><div class='input-group'><div class='select-dropdown'><label for='Course'>Course</label><select name='course' id='course'><option value='' selected disabled> select option</option>";

    for (k = 0; k < data2.length; k++) {
      s += ` <option value=' ${data2[k].cource_name}'> ${data2[k].cource_name}</option>`;
    }

    s +=
      "</select><span class='span1' id='city-error'></span></div></div><div class='input-group'><label for='University'>University/college</label><input type='text' name='uni' id='uni' onchange='uniValidate()'/><span class='span1' id='uni-error'></span></div><div class='input-group'><label for='passyear'>Passing Year</label><input type='text' name='passyear' id='passyear'  onchange='yearValidate()'/><span class='span1' id='year-error'></span></div><div class='input-group'><label for='percentage'>Percentage</label><input type='text' name='percent' id='percent' onchange='percentValidate()' /><span class='span1' id='percent-error'></span></div></div> ";

    v2.innerHTML = s;
    table2.append(v2);
    clk++;
  }
}
