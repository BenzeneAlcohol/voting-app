const Poll = require('../models/Poll');
const User = require('../models/User');

exports.displayPolls = async (req, res, next) => {
    try {
      const polls = await Poll.find({}).populate('user', ['username', 'id']);
      return res.status(200).json(polls);
    } catch (err) {
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
};

exports.createPolls = async (req,res,next)=>{
    try {
        console.log(req.body);
        const {question, options} = req.body;
        const user = req.user;
        console.log(user);
        const poll = await Poll.create({
            question,
            user,
            options: options.map(option=> ({option, votes: 0}))
        });
        console.log(poll);
        user.polls.push(poll._id);
        console.log(user);
        await user.save();
        return res.status(201).json(poll);
    } catch (error) {
        res.status(401).json({
            message: error.message,
            success: false
        })
    }
}

exports.displaySpecificPoll = async (req,res,next)=>{
    
}
exports.displaySpecificUser = async (req,res,next)=>{
    try{
        const user = req.user;
        console.log(user);
        const userPoll = await User.findById(user._id).populate('polls');
        console.log(userPoll);
        res.status(200).json(userPoll.polls);
    } catch(err){
        res.status(401).json({
            success: false,
            message: err.message
        })
    }

}