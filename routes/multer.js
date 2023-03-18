const express = require('express')
const mysql2 = require('mysql2')
const body_parser = require('body-parser')
const path = require('path')
const app = express()
const multer=require("multer")
app.use(body_parser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

const upload = multer({ dest: "uploads/" });


app.set("view engine", "ejs");
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());


app.get("/upload", (req, res) => {
  res.render("multer", {});
});

app.post("/upload", upload.single("profileImage"), async (req, res) => {
  
  console.log(req.file);

  const uniqueSuffix=""
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
       uniqueSuffix = Date.now() + "-" + `${originalname}`;
       console.log(uniqueSuffix,"from the storegae");
      cb(null, uniqueSuffix);
    },
  });

  const storage_compress =  SharpMulter({
    destination: (req, file, callback) => callback(null, "./uploads_compress"),
    filename:function(req,file,cb){
        uniqueSuffix=uniqueSuffix+"-compress"
        console.log(uniqueSuffix,"from the storege_comperss");
        cb(null,uniqueSuffix)
    },
    imageOptions: {
      fileFormat: "png",
      quality: 80,
      resize: { width: 300, height: 300 },
    },
  });


  
  const upload = multer({ storage });
  const upload_compress = multer({ storage_compress });

  console.log(upload);
  console.log(upload_compress);

  res.redirect("/");
});

app.listen("5000", () => {
  console.log("server is running");
});
