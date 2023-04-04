
function comt() {
    var cmt = document.getElementById("cmt");

    for(var i=0; i<data.length ; i++){
        var div = document.createElement("div");
        div.setAttribute("class", "yellow");
        // div.setAttribute("class", "red");
        div.innerHTML= data[i].comment;
        cmt.append(div)
      
    }

 
}