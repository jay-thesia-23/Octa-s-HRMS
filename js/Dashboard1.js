
let clickLeave = 0;
let clickAttend = 0;
function myFunction(clickBtn) {
    if(clickLeave == 0 && clickBtn == 'Leave'){
        document.getElementById("leave-sub").style.display = "block";
        clickLeave = 1;
    }
    else if(clickLeave == 1 && clickBtn == 'Leave'){
        document.getElementById("leave-sub").style.display = "none";
        clickLeave = 0;
    }
    if(clickAttend == 0 && clickBtn == 'Attendence'){
        document.getElementById("attend-sub").style.display = "block";
        clickAttend = 1;
    }
    else if(clickAttend == 1 && clickBtn == 'Attendence'){
        document.getElementById("attend-sub").style.display = "none";
        clickAttend = 0;
    }
}
function isComment(thisElement){
    let commentBtn = document.getElementById('commentBtn');
    if(((thisElement.value).length) > 0){
        commentBtn.style.opacity = 1;
        commentBtn.style.pointerEvents = 'all';
    }
    else{
        commentBtn.style.opacity = 0.6;
        commentBtn.style.pointerEvents = 'none';
    }
}
function addComment(){
    let commentBtn = document.getElementById('commentBtn');
    let element = document.getElementById('commenter');
    let commentval = element.value;
    let comment = '<p style="background-color:#e6ecf5;" >'+commentval+'</p>'
    let commentBody = document.getElementById('commentBody');
    commentBody.innerHTML += comment;
    element.value = "";
    commentBtn.style.opacity = 0.6;
    commentBtn.style.pointerEvents = 'none';
}
function checkIn(element){
    var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let time = today.toLocaleTimeString(); 
    element.style.opacity =0.6;
    element.style.pointerEvents = 'none';
    let breakIn = document.getElementById('breakIn');
    let checkOut = document.getElementById('checkOut');
    let attendenceEntry = document.getElementById('attendenceEntry');
    let entry = '<p style=" color:white; background-color:green;" > Checked In : '+ time +'</p>';
    breakIn.style.opacity = 1;
    breakIn.style.pointerEvents = "all"    
    checkOut.style.opacity = 1;
    checkOut.style.pointerEvents = "all"
    attendenceEntry.innerHTML = entry;
}
function breakIn(element){
    var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let time = today.toLocaleTimeString(); 
    element.style.opacity =0.6;
    element.style.pointerEvents = 'none';
    let breakOut = document.getElementById('breakOut');
    let checkOut = document.getElementById('checkOut');
    let attendenceEntry = document.getElementById('attendenceEntry');
    let entry = '<p style=" color:white; background-color:#ee7f00;" > Breaked In : '+ time +'</p>';
    breakOut.style.opacity = 1;
    breakOut.style.pointerEvents = "all"    
    checkOut.style.opacity = 0.6;
    checkOut.style.pointerEvents = "none"
    attendenceEntry.innerHTML += entry;
}
function breakOut(element){
    
    var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let time = today.toLocaleTimeString(); 
    element.style.opacity =0.6;
    element.style.pointerEvents = 'none';
    let breakIn = document.getElementById('breakIn');
    let checkOut = document.getElementById('checkOut');
    let attendenceEntry = document.getElementById('attendenceEntry');
    let entry = '<p style=" color:white; background-color:#bb6400;" > Breaked Out : '+ time +'</p>';
    breakIn.style.opacity = 1;
    breakIn.style.pointerEvents = "all"    
    checkOut.style.opacity = 1;
    checkOut.style.pointerEvents = "all"
    attendenceEntry.innerHTML += entry;
}
function checkOut(element){
    var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let time = today.toLocaleTimeString(); 
    element.style.opacity =0.6;
    element.style.pointerEvents = 'none';
    let breakIn = document.getElementById('breakIn');
    let breakOut = document.getElementById('breakOut');
    let checkOut = document.getElementById('checkOut');
    let attendenceEntry = document.getElementById('attendenceEntry');
    let ThankYou = document.getElementById('ThankYou');
    let entry = '<p style=" color:white; background-color:red;" > Checked Out : '+ time +'</p>';
    breakIn.style.opacity = 0.6;
    breakIn.style.pointerEvents = "none";
    breakOut.style.opacity = 0.6;
    breakOut.style.pointerEvents = "none";
    checkOut.style.opacity = 0.6;
    checkOut.style.pointerEvents = "none"
    attendenceEntry.innerHTML += entry;
    ThankYou.style.display = 'block';
}
function setRealTime(){
    let element = document.getElementById('realTime');
    var today = new Date();
    let realTime  = formatAMPM(today);
    element.innerHTML  = realTime;
    setTimeout(setRealTime,1000)
}



function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    var strTime = hours + ':' + minutes +':'+ seconds+ ' ' + ampm;
    return strTime;
}