const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("express framework is here");
})
app.get('/home',function(req,res){
    res.send("express home framework is here");
})
app.get('/random' , function(req,res){
    let result = Math.random();
    res.write("hello world");
    res.write(result.toString());
    // res.write("<hr>");
    res.end();
    // res.send(result.toString())
})
app.listen(5000, function(error){
    if(error) throw error;
    console.log("server runing");
})