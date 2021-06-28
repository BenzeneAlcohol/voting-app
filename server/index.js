const express = require('express');
const mongoose = require('mongoose');
const app=express();
const cors = require('cors');
const Authent = require('./routes/auth');
const connectDB = require('./config/mongoose');
const pollRoute = require('./routes/pollRoute');

connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/api/auth', Authent);
app.use('/api/polls', pollRoute);

app.get('/' ,(req,res)=>{
    res.send("Hello and welcome to the starting project");
})


app.listen(7000, (err)=>{
    if(err){
        console.log("Error");
    }
    console.log("Server is up and running at port 7000");
})