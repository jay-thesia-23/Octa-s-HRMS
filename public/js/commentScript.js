async function commentInsert(){
  console.log("in comment insert fun");
  fetch("/fetch_comment", {
    method: "get",
    headers: {
      "Content-type": "application/json",
    },
  })

  .then((res) => res.json())
      .then((data) => 
      {
       
        console.log(data,"daataaa");
      

        var cmt = document.getElementById("cmt");

        for(var i=0; i<data.length ; i++){
            var div = document.createElement("div");
            div.setAttribute("class", "yellow");
            // div.setAttribute("class", "red");
            div.innerHTML= data[i].comment;
            cmt.append(div)
          
        }
    
      });
}


// async function fetchComment() {

//     console.log("function is called!!!!!!!");
//     fetch("/comment_fatch", {
//       method: "post",
//       headers: {
//         "Content-type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data,"daataaa");
//         var cmt = document.getElementById("cmt");

//         for(var i=0; i<data.length ; i++){
//             var div = document.createElement("div");
//             div.setAttribute("class", "yellow");
//             // div.setAttribute("class", "red");
//             div.innerHTML= data[i].comment;
//             cmt.append(div)
//             console.log(cmt);
//         }
    
//       });
//   }