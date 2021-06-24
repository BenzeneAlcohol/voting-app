const User = require('../models/User');




exports.register = async (req,res,next)=>{
    const {username, email, password} = req.body;
    try{
        const user = await User.create({
            username,
            email,
            password
        });
        sendToken(user, 201, res);
    }catch(e){
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}



exports.login = async (req,res,next)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400).json({
            success: false,
            error: "Please provide an email/password"
        })
    }
    try{
        const user = await User.findOne({email}).select("+password"); //We are using select here because in the schema earlier, we set password to not show during findOne()
        console.log(user);
        if(!user){
            res.status(404).json({
                success: false,
                error: "No user exists"
            })
        }
        const isMatch = await user.matchPasswords(password);
        if(!isMatch){
            res.status(404).json({
                success: false,
                error: "Password and email does not match"
            })
        }
        sendToken(user, 200, res);
    }catch(e){
        res.status(500).json({success: false, error: e.message})
    }

}



const sendToken = (user, statusCode, res)=>{
    const token = user.getSignedToken();
    res.status(statusCode).json({success: true, token});
}