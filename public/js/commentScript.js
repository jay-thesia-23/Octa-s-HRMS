


async function fetchComment() {



  fetch("/comment_fatch", {
    method: "get",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
    
      var cmt = document.getElementById("cmt");

      for(var i=0; i<data.length ; i++){
          var div = document.createElement("div");
          div.setAttribute("class", "cmt_txt_style");
          div.innerText= data[i].comment;
          cmt.append(div)
      }
  
    });
  }
