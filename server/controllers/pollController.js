const Poll = require('../models/Poll');
const User = require('../models/User');
const ObjectID = require('mongodb').ObjectID;

exports.displayPolls = async (req, res, next) => {
    try {
      const polls = await Poll.find({}).populate('user');
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
        const {question, options} = req.body;
        const user = req.user;
        const poll = await Poll.create({
            question,
            user,
            options: options.map(option=> ({option, votes: 0}))
        });
        user.polls.push(poll._id); //Storing the polls CREATED by the user.
        await user.save();
        return res.status(201).json(poll);
    } catch (error) {
        res.status(401).json({
            message: error.message,
            success: false
        })
    }
}


exports.displaySpecificUser = async (req,res,next)=>{
    try{
        const user = req.user;
        const userPoll = await User.findById(user._id).populate('polls');
        res.status(200).json(userPoll.polls);
    } catch(err){
        res.status(401).json({
            success: false,
            message: err.message
        })
    }

}



exports.displaySpecificPoll = async (req,res,next)=>{
    try{
        const {id} = req.params;
        if(!ObjectID.isValid(id)){
            return res.status(401).json({
                success: false,
                message: "Object ID invalid"
            })
        }
        const poll = await Poll.findById(id).populate('user', ['username']);

        if(!poll){
            return res.status(401).json({
                success: false,
                message: "No Poll exists"
            })
        }

        res.status(200).json(poll);
    }catch(err){
        res.json({
            success: false,
            message: err.message
        })
    }
}

exports.votePoll = async (req,res,next)=>{
    try {
        const user = req.user;
        const userID = req.user._id;
        const {id} = req.params;
        if(!ObjectID.isValid(id)){
            return res.status(401).json({
                success: false,
                message: "Object ID invalid"
            })
        }
        const {ans} = req.body;
        if(!ans){
            return res.status(401).json({
                success: false,
                message: "No form body"
            })
        }
        const poll = await Poll.findById(id);
        if(!poll){
            return res.status(401).json({
                success: false,
                message: "Poll not found"
            })
        }
        const vote = poll.options.map(option =>
              (option.option.toString() === ans)? {
                    votes: option.votes + 1,
                    option: option.option,
                    _id: option._id,
                  }: option,
            );
            if ((poll.voted.filter(user => user.toString() === userID.toString()).length) <= 0) //What filter does it, it returns an array that meets the conditions that were specific inside the filter method. Here, the condition was whether the userID already existed. If it existed, it would return an array with that ID alone, which would make the length more than 0. Hence, it means the user already voted. 
        {
            console.log(typeof(userID.toString()));
            console.log(poll.voted.length);
            poll.voted.push(userID);
            poll.options = vote;
            await poll.save();
            return res.status(201).json({
                success: true,
                poll
            });
        }
        else{
            res.status(400).json({
                success: false,
                message: "You have already voted once"
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}