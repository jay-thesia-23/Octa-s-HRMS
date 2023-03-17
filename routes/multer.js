import bodyParser from "body-parser";
import express from "express";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import mysql2 from "mysql2";
import cookieParser from "cookie-parser";
import path from "path";
import SharpMulter from "sharp-multer"
import multer from "multer";

const upload = multer({ dest: "uploads/" });
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
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

app.listen("3030", () => {
  console.log("server is running");
});
