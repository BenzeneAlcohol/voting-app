const mongoose = require('mongoose');

const connectDB = async() =>{
    await mongoose.connect('mongodb://localhost/AutheDB', {useNewUrlParser: true});
    console.log("MongoDB Connected");
}

module.exports = connectDB;