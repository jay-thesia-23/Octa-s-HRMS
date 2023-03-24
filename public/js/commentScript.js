
var commentbtn = document.getElementById("commentBtn");
var clickBtn = document.getElementById('click')[0];
function myFunction(){


// Disable the button on initial page load
commentbtn.disabled = true;

//add event listener
if(clickBtn == ""){
    commentbtn.disabled = false;
}


}