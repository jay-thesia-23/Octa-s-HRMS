
var express=require("express")
var app=express()


var pageNotFoundGet=(req,res)=>{
    res.render("page404")
  }

module.exports={pageNotFoundGet}
