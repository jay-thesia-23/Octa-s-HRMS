var express=require("express")
var cookieParser=require("cookie-parser")
var util=require("util")
var jwt=require("jsonwebtoken")

var conn=require("../config/dbConnect")

var app=express()
app.use(express.json())

var alldata=util.promisify(conn.query).bind(conn)

const wizardFill=async (req,res,next)=>{
    var login_token=req.cookies.login_token;

    var email;
    jwt.verify(login_token,"sanjay",(err,decode)=>{
  
      // console.log(decode.email,"decode chhhe");
      email=decode.email
    })
    
  
    var checkWizard=`select * from registration where u_email='${email}';`
  
    var data=await alldata(checkWizard)
  
    // console.log(data,"data of roy");
    if(data[0].u_login==1){
        console.log("inside login");
      res.redirect("/wizard")
     
    }else{
        next()
    }
}

module.exports={wizardFill}
