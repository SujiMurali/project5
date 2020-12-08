const express = require('express'),
    app = express() 
     app.use(express.static('public'));

 app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
    

 })

 app.get("/login",(req,res)=>{
   res.sendFile(__dirname+"/login.html");

 })

app.listen(3000,()=>{
    console.log("App started");
})

