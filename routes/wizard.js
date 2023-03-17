var mysql = require('mysql2');
var express = require('express');
var app = express();
app.set('view engine', 'ejs')

var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
var multer=require('multer')


const upload = multer({ dest: "uploads/" });


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hrms'

});

connection.connect((err) => {
  if (err)
    throw err;
  console.log("connected");
})


app.get("/wizard",(req,res)=>{
   res.render('wizard');
  })

  // upload.fields([{
  //   name: 'adhar', maxCount: 1
  // }, {
  //   name: 'resume', maxCount: 1
  // },{
  //   name: 'cheque', maxCount: 1
  // }, {
  //   name: 'others', maxCount: 1
  // }, ])

app.post("/wizard", upload.fields([{
  name: 'adhar', maxCount: 1
}, {
  name: 'resume', maxCount: 1
},{
  name: 'cheque', maxCount: 1
}, {
  name: 'others', maxCount: 1
}, ])
, async (req, res) => {
    
    console.log(req.files,"file in uploads");
  
    const uniqueSuffix=""
    const storage = multer.diskStorage({
      destination: function (req, files, cb) {
        cb(null, "./uploads");
      },
      filename: function (req, files, cb) {
         uniqueSuffix = Date.now() + "-" + `${originalname}`+".png";
         console.log(uniqueSuffix,"from the storage");
        cb(null, uniqueSuffix);
      },
    });
  
    // const storage_compress =  SharpMulter({
    //   destination: (req, file, callback) => callback(null, "./uploads_compress"),
    //   filename:function(req,file,cb){
    //       uniqueSuffix=uniqueSuffix+"-compress"
    //       console.log(uniqueSuffix,"from the storege_comperss");
    //       cb(null,uniqueSuffix)
    //   },
    //   imageOptions: {
    //     fileFormat: "png",
    //     quality: 80,
    //     resize: { width: 300, height: 300 },
    //   },
    // });

    console.log(typeof storage);
    const upload = multer({ storage });
    // const upload_compress = multer({ storage_compress });
  
    console.log(upload);
    // console.log(upload_compress);
  
    res.redirect("/");
  });
module.exports=app
  