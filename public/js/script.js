const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const nextBtns2 = document.querySelectorAll(".btn2-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
var isvalidate =true;
let formStepsNum = 0;


fetch("/cityCourse")

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    var currRegister1 =registerPage1()
   
    console.log(currRegister1);
   
    if(currRegister1 ){
      formStepsNum++;
    updateFormSteps();
    updateProgressbar();
    }

  });
});
nextBtns2.forEach((btn) => {
  btn.addEventListener("click", () => {
    
    var currRegister2 =registerPage2()
   
    console.log(currRegister2);

    if(currRegister2){
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

// -----------------validation--------------------

function uniValidate(){
  var uni = document.getElementById('uni').value;
  
  if(uni == null || uni == "")
  {
      document.getElementById('uni-error').innerHTML="Please enter university";
      isvalidate = false;
  }
 
  else{
      document.getElementById('uni-error').innerHTML="";
  }
  return true;
}


function addressValidate(){
  var address = document.getElementById('address').value;
  
  if(address == null || address == "")
  {
      document.getElementById('address-error').innerHTML="Please enter address";
      isvalidate = false;
  }
 
  else{
      document.getElementById('address-error').innerHTML="";
  }
  return true;
}

function yearValidate(){
  var passyear = document.getElementById('passyear').value;
  
  if(passyear == null || passyear == "")
  {
      document.getElementById('passyear-error').innerHTML="Please enter passing year";
      isvalidate = false;
  }
  else if(isNaN(passyear))
  {
      document.getElementById('year-error').innerHTML="Please enter valid passing year";
      isvalidate = false;
  }
  else{
      document.getElementById('year-error').innerHTML="";
  }
  return true;
}

function percentValidate(){
  var percent = document.getElementById('percent').value;
  
  if(percent == null || percent == "")
  {
      document.getElementById('percent-error').innerHTML="Please enter percentage";
      isvalidate = false;
  }
  else if(isNaN(percent))
  {
      document.getElementById('percent-error').innerHTML="Please enter valid percentage";
      isvalidate = false;
  }
  else{
      document.getElementById('percent-error').innerHTML="";
  }
  return true;
}

function fnameValidate(){
  var fname = document.getElementById('fname').value;
  
  if(fname == null || fname == "")
  {
      document.getElementById('fname-error').innerHTML="Please enter first name";
      isvalidate=false
  }
  else if(!isNaN(fname))
  {
      document.getElementById('fname-error').innerHTML="Please enter valid first name";
      isvalidate=false
  }
  else{
      document.getElementById('fname-error').innerHTML="";
      // return false;
  }
  return true;
}
function lnameValidate(){
  var lname = document.getElementById('lname').value;
  
  if(lname == null || lname == "")
  {
      document.getElementById('lname-error').innerHTML="Please enter last name";
    isvalidate=false
  }
  else if(!isNaN(lname))
  {
      document.getElementById('lname-error').innerHTML="Please enter valid lastname";
      isvalidate=false
  }
  else{
      document.getElementById('lname-error').innerHTML="";
  }
  return true;
}

function contactValidate(){
  var contact = document.getElementById('contact').value;
  
  if(contact == null || contact == "")
  {
      document.getElementById('contact-error').innerHTML="Please enter contact";
      isvalidate = false;
  }
  
  else{
      document.getElementById('contact-error').innerHTML="";
  }
  return true;
}


async function select(state_id){
  // console.log(state_id);
  
  const ans = await fetch(`http://localhost:5000/test-api?state_id=${state_id.value}`);
  
  const data = await ans.json();
  console.log(data)
  var city_1 = document.getElementById("city");
  city_1.innerHTML = "";

  for(let i=0;i<data.length;i++){
      const option = new Option(data[i].city_name,data[i].city_name);
      city_1.add(option);
  }
}



function registerPage1() {

  console.log("call the register");
  var fname = document.getElementById('fname').value || "";
  var lname = document.getElementById('lname').value || "";
  var dob = document.getElementById('dob_1').value || "";
  var address = document.getElementById('address').value || "";
  var contact = document.getElementById('contact').value || "";
  var state = document.getElementById('state').value || "";

  var relationship = document.getElementById('relationship').value || "";
  //var gender = document.getElementById('gender').value || "";
  var city = document.getElementById('city').value || "";
  var isvalidate = true;
  
  if(fname == null || fname == "")
  {
      document.getElementById('fname-error').innerHTML="Please enter username";
      isvalidate = false;
      
  }
  else{
      document.getElementById('fname-error').innerHTML="";
  }
  
  if(lname == null || lname == "")
  {
      document.getElementById('lname-error').innerHTML="Please enter lname";
      isvalidate = false;
  }
  else{
      document.getElementById('lname-error').innerHTML="";
  }


  if(dob == null || dob == "")
  {
      document.getElementById('dob-error').innerHTML="Please fill date of birth";
      isvalidate = false;
  }
  else{
      document.getElementById('dob-error').innerHTML="";
  }

  if(address == null || address == "")
  {
      document.getElementById('address-error').innerHTML="Please enter address";
      isvalidate = false;
  }
  else{
      document.getElementById('address-error').innerHTML="";
  }

  if(contact == null || contact == "")
  {
      document.getElementById('contact-error').innerHTML="Please enter contact number";
      isvalidate = false;
  }
  else if(isNaN(contact))
  {
      document.getElementById('contact-error').innerHTML="Please enter valid contact number";
      isvalidate = false;
  }
  else{
      document.getElementById('contact-error').innerHTML="";
  }



  if(state.length<=0)
  {
      document.getElementById('state-error').innerHTML="Please select state";
      isvalidate = false;
  }
  else{
      document.getElementById('state-error').innerHTML="";
  } 

  // if(gender == null || gender == "")
  // {
  //     document.getElementById('gender-error').innerHTML="Please select gender";
  //     isvalidate = false;
  // }
  // else{
  //     document.getElementById('gender-error').innerHTML="";
  // } 


  if(city == null || city == "")
  {
      document.getElementById('city-error').innerHTML="Please select city";
      isvalidate = false;
  }
  else{
      document.getElementById('city-error').innerHTML="";
  } 

  if(relationship ==0)
  {
      document.getElementById('relationship-error').innerHTML="Please select relationship status";
      isvalidate = false;
  }
  else{
      document.getElementById('relationship-error').innerHTML="";
  } 

  
console.log(isvalidate);
  return isvalidate;
}

function registerPage2(){

  console.log("call the register");
  var uni = document.getElementById('uni').value || "";
  var passyear = document.getElementById('passyear').value || "";
  var percent = document.getElementById('percent').value || "";
  
  var isvalidate = true;
  
  if(uni == null || uni == "")
  {
      document.getElementById('uni-error').innerHTML="Please enter university/college";
      isvalidate = false;
      
  }
  else{
      document.getElementById('uni-error').innerHTML="";
  }
  
  if(passyear == null || passyear == "")
  {
      document.getElementById('year-error').innerHTML="Please enter passing year";
      isvalidate = false;
  }
  
  else{
      document.getElementById('year-error').innerHTML="";
  }

  if(percent == null || percent == "")
  {
      document.getElementById('percent-error').innerHTML="Please enter percentage";
      isvalidate = false;
  }
  else{
      document.getElementById('percent-error').innerHTML="";
  }
  console.log(isvalidate);
  return isvalidate;
}

var clk =1;
async function education(){
  var k
console.log("sanjay");
  const ans = await fetch(`http://localhost:5000/cource`);
  
  const data2 = await ans.json();
  console.log(data2[0].cource_name);
  var table2= document.getElementById('add');
  var v2 = document.createElement('div');
  var s = ""
  if(clk <= 10)
      {
          s +="<div id='education' name='edu'><div class='input-group'><div class='select-dropdown'><label for='Course'>Course</label><select name='course' id='course'><option value='' selected disabled> select option</option>"

          for(k=0;k<data2.length ;k++) {
         s+=` <option value=' ${data2[k].cource_name}'> ${data2[k].cource_name}</option>`
        }

         s+= "</select><span class='span1' id='city-error'></span></div></div><div class='input-group'><label for='University'>University/college</label><input type='text' name='uni' id='uni' onchange='uniValidate()'/><span class='span1' id='uni-error'></span></div><div class='input-group'><label for='passyear'>Passing Year</label><input type='text' name='passyear' id='passyear'  onchange='yearValidate()'/><span class='span1' id='year-error'></span></div><div class='input-group'><label for='percentage'>Percentage</label><input type='text' name='percent' id='percent' onchange='percentValidate()' /><span class='span1' id='percent-error'></span></div></div> ";

          v2.innerHTML = s;
          table2.append(v2);
          clk++;
          }
     
  }
