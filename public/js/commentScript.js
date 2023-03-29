async function fetchComment() {

  console.log("function is called!!!!!!!");
  fetch("/comment_fatch", {
    method: "get",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data,"daataaa");
      var cmt = document.getElementById("cmt");

      for(var i=0; i<data.length ; i++){
          var div = document.createElement("div");
          div.setAttribute("class", "yellow_activity");
          div.innerHTML= data[i].comment;
          cmt.append(div)
      }
  
    });
}