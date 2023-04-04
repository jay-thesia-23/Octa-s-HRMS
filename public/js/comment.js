  var button = document.getElementById("Button");
    var clickBtn = document.getElementsByClassName('click')[0];

    // Disable the button on initial page load
    button.disabled = true;

    //add event listener
    clickBtn.addEventListener('click', function(event) {
        button.disabled = !button.disabled;
    });

    button.addEventListener('click', function(event) {
        alert('Enabled!');
    });