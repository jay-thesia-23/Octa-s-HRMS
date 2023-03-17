var mysql = require('mysql2');
var express = require('express');
var multer=require('multer')
var app = express();
app.set('view engine', 'ejs')
const upload = multer({ dest: "uploads/" });
var app = express();

app.set("view engine", "ejs");


// app.get("/", (req, res) => {
//   res.render("multer", {});
// });

// app.post("/wizard",upload.fields([{
//   name: 'adhar', maxCount: 1
// }, {
//   name: 'resume', maxCount: 1
// },{
//   name: 'cheque', maxCount: 1
// }, {
//   name: 'others', maxCount: 1
// }, ]), async (req, res) => {
  
//   console.log(req.file);

//   const uniqueSuffix=""
//   const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./uploads");
//     },
//     filename: function (req, file, cb) {
//        uniqueSuffix = Date.now() + "-" + `${originalname}`;
//        console.log(uniqueSuffix,"from the storege");
//       cb(null, uniqueSuffix);
//     },
//   });

//   // const storage_compress =  SharpMulter({
//   //   destination: (req, file, callback) => callback(null, "./uploads_compress"),
//   //   filename:function(req,file,cb){
//   //       uniqueSuffix=uniqueSuffix+"-compress"
//   //       console.log(uniqueSuffix,"from the storege_comperss");
//   //       cb(null,uniqueSuffix)
//   //   },
//   //   imageOptions: {
//   //     fileFormat: "png",
//   //     quality: 80,
//   //     resize: { width: 300, height: 300 },
//   //   },
//   // });
//   const upload = multer({ storage });
//   // const upload_compress = multer({ storage_compress });

//   console.log(upload);
//   // console.log(upload_compress);

//   res.redirect("/");
// });

module.exports=app

