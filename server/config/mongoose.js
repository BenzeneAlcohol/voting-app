const mongoose = require('mongoose');

const connectDB = async() =>{
    await mongoose.connect('mongodb://localhost/finalProductiondb', {useNewUrlParser: true});
    console.log("MongoDB Connected");
}

module.exports = connectDB;