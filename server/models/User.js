const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a valid username"],
    },
    email: {
        type: String,
        required: [true, "Please provide a valid email adress"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a valid password"],
        minlength: 5,
        select: false
    },
    polls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Poll' }]
})

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); //this.password is basically the User object that was created. It is not the argument that is sent here.
    next();
})

UserSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password, this.password);//this.password is basically the User object that was created. It is not the argument that is sent here. So here, we are going to compare whether the password that is sent is same as the encrypted password that is present in the database.
}

UserSchema.methods.getSignedToken = function(){//this._id is the id of the mongoose user. No need to pass anything in the form of arguments. Basically refers to the object on which we are calling this function.
    return jwt.sign({id: this._id},'becabaed1197bc18773095f42aa2dec21c5e9f814a8049c9030e320513ba18460f51f3', {expiresIn: '200h'} )
}

const User = mongoose.model("User", UserSchema);
module.exports = User;