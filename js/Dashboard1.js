
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
    let commentval = document.getElementById('commenter').value;
    let comment = '<p style="background-color:#e6ecf5;" >'+commentval+'</p>'
    console.log(comment);
    
    let commentBody = document.getElementById('commentBody');
    commentBody.innerHTML += comment;
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
    let entry = '<p style="background-color:green;" > Checked In : '+ time +'</p>';
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
    let entry = '<p style="background-color:#ee7f00;" > Breaked In : '+ time +'</p>';
    breakOut.style.opacity = 1;
    breakOut.style.pointerEvents = "all"    
    checkOut.style.opacity = 0.6;
    checkOut.style.pointerEvents = "none"
    attendenceEntry.innerHTML += entry;
}
function breakOut(element){
    console.log(element);
    
    var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let time = today.toLocaleTimeString(); 
    element.style.opacity =0.6;
    element.style.pointerEvents = 'none';
    let breakIn = document.getElementById('breakIn');
    let checkOut = document.getElementById('checkOut');
    let attendenceEntry = document.getElementById('attendenceEntry');
    let entry = '<p style="background-color:#bb6400;" > Breaked Out : '+ time +'</p>';
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
    let entry = '<p style="background-color:red;" > Checked Out : '+ time +'</p>';
    breakIn.style.opacity = 0.6;
    breakIn.style.pointerEvents = "none";
    breakOut.style.opacity = 0.6;
    breakOut.style.pointerEvents = "none";
    checkOut.style.opacity = 0.6;
    checkOut.style.pointerEvents = "none"
    attendenceEntry.innerHTML += entry;
    ThankYou.style.display = 'block';
}