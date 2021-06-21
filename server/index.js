const express = require('express');
const mongoose = require('mongoose');
const app=express();

app.use(express.urlencoded({extended: true}));

app.get('/' ,(req,res)=>{
    res.send("Hello and welcome to the starting project");
})


app.listen(7000, (err)=>{
    if(err){
        console.log("Error");
    }
    console.log("Server is up and running");
})