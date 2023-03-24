var commentbtn = document.getElementById("commentBtn");
var clickBtn = document.getElementsByClassName('click')[0];

// Disable the button on initial page load
commentbtn.disabled = true;

//add event listener
clickBtn.addEventListener('click', function(event) {
    commentbtn.disabled = !commentbtn.disabled;
});

