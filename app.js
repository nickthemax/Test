const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname  + "/html/pages/index.html");   
    
});

  


app.listen(8287,function(){
    console.log("Server On at url http://localhost:8287");
});