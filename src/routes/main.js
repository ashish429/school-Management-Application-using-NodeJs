const express =require('express')
const { route  }=require('express/lib/application')
const routes=express.Router()

routes.get("/",(request,response)=>{
    response.render("index")
})
routes.post("/add",(request,response)=>{
    response.render("add-student")
})
routes.get("/update",(request,response)=>{
    response.render("update-student")
})
routes.get("/table",(request,response)=>{
    response.render("table")
})
routes.get("/form",(request,response)=>{
    response.render("student-form")
})
routes.get("/result",(request,response)=>{
    response.render("student-result")
})

module.exports=routes