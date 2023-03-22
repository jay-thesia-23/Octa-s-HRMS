

var check_in = document.getElementById('check_in')
var check_out = document.getElementById('check_out')
var breck_in = document.getElementById('breck_in')
var breck_out = document.getElementById('breck_out')




function demo() {

    document.getElementById("check_in").disabled = true;
    document.getElementById("check_out").disabled = false;
    document.getElementById("breck_in").disabled = false;
    document.getElementById("breck_out").disabled = true;
    var check= document.getElementById('ThankYou')

    const d = new Date();
    var s = d.getHours();
    var m = d.getMinutes();
    
    var div = document.createElement('div')
    div.setAttribute("class", "green")
     div.innerHTML = "Check In "+ s + ":" + m;

     
    check.append(div)


}

function chk_out() {

    document.getElementById("check_in").disabled = false;
    document.getElementById("check_out").disabled = true;
    document.getElementById("breck_in").disabled = true;
    document.getElementById("breck_out").disabled = true;
    var check= document.getElementById('ThankYou')
    var check_out = document.getElementById('attendenceEntry')
    check_out.hidden=false



    const d = new Date();
    var s = d.getHours();
    var m = d.getMinutes();
    
    var div = document.createElement('div')
    div.setAttribute("class", "red")
     div.innerHTML = "Check Out "+ s + ":" + m;

    check.append(div)

    check_out.innerHTML = "Thank You!!!!!"

}

function breck() {
    document.getElementById("check_in").disabled = true;
    document.getElementById("check_out").disabled = true;
    document.getElementById("breck_in").disabled = true;
    document.getElementById("breck_out").disabled = false;
    var check= document.getElementById('ThankYou')


    const d = new Date();
    var s = d.getHours();
    var m = d.getMinutes();
    
    var div = document.createElement('div')
    div.setAttribute("class", "yellow")
     div.innerHTML = "break In "+ s + ":" + m;

     
    check.append(div)
}

function brc_out() {

    document.getElementById("check_in").disabled = true;
    document.getElementById("check_out").disabled = false;
    document.getElementById("breck_in").disabled = false;
    document.getElementById("breck_out").disabled = true;
    var check= document.getElementById('ThankYou')

    const d = new Date();
    var s = d.getHours();
    var m = d.getMinutes();
    
    var div = document.createElement('div')
    div.setAttribute("class", "saffron")
     div.innerHTML = "break Out "+ s + ":" + m;

     
    check.append(div)

}

async function checkin() {
    fetch('/check_in', {
        method: 'post',
        headers: {
            "Content-type": 'application/json'
        }
    })

        .then(res => res.json())
        .then(data => {
            console.log("check in sucesfully!!!!")
        })

}

async function checkout() {
    fetch('/check_out', {
        method: 'post',
        headers: {
            "Content-type": 'application/json'
        }
    })

        .then(res => res.json())
        .then(data => {
            console.log("check out sucesfully!!!!")
        })

}

async function breakin() {
    fetch('/breck_in', {
        method: 'post',
        headers: {
            "Content-type": 'application/json'
        }
    })

        .then(res => res.json())
        .then(data => {
            console.log("breck in sucesfully!!!!")
        })

}

async function breakout() {
    fetch('/breck_out', {
        method: 'post',
        headers: {
            "Content-type": 'application/json'
        }
    })

        .then(res => res.json())
        .then(data => {
            console.log("breck out sucesfully!!!!")
        })

}



let clickLeave = 0;
let clickAttend = 0;
function myFunction(clickBtn) {
    if (clickLeave == 0 && clickBtn == 'Leave') {
        document.getElementById("leave-sub").style.display = "block";
        clickLeave = 1;
    }
    else if (clickLeave == 1 && clickBtn == 'Leave') {
        document.getElementById("leave-sub").style.display = "none";
        clickLeave = 0;
    }
    if (clickAttend == 0 && clickBtn == 'Attendence') {
        document.getElementById("attend-sub").style.display = "block";
        clickAttend = 1;
    }
    else if (clickAttend == 1 && clickBtn == 'Attendence') {
        document.getElementById("attend-sub").style.display = "none";
        clickAttend = 0;
    }
};

function isComment(thisElement) {
    let commentBtn = document.getElementById('commentBtn');
    if (((thisElement.value).length) > 0) {
        commentBtn.style.opacity = 1;
        commentBtn.style.pointerEvents = 'all';
    }
    else {
        commentBtn.style.opacity = 0.6;
        commentBtn.style.pointerEvents = 'none';
    }
}
function addComment() {
    let commentBtn = document.getElementById('commentBtn');
    let element = document.getElementById('commenter');
    let commentval = element.value;
    let comment = '<p style="background-color:#e6ecf5;" >' + commentval + '</p>'
    let commentBody = document.getElementById('commentBody');
    commentBody.innerHTML += comment;
    element.value = "";
    commentBtn.style.opacity = 0.6;
    commentBtn.style.pointerEvents = 'none';
}
var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let time = today.toLocaleTimeString();
element.style.opacity = 0.6;
element.style.pointerEvents = 'none';
let breakIn = document.getElementById('breakIn');
let breakOut = document.getElementById('breakOut');
let checkOut = document.getElementById('checkOut');
let attendenceEntry = document.getElementById('attendenceEntry');
let ThankYou = document.getElementById('ThankYou');
let entry = '<p style=" color:white; background-color:red;" > Checked Out : ' + time + '</p>';
breakIn.style.opacity = 0.6;
breakIn.style.pointerEvents = "none";
breakOut.style.opacity = 0.6;
breakOut.style.pointerEvents = "none";
checkOut.style.opacity = 0.6;
checkOut.style.pointerEvents = "none"
attendenceEntry.innerHTML += entry;
ThankYou.style.display = 'block';


let element = document.getElementById('realTime');
var today = new Date();
let realTime = formatAMPM(today);
element.innerHTML = realTime;
setTimeout(setRealTime, 1000)




function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
}
