const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.auth = async (req, res, next)=>{
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        console.log("Error");
      }
    try {
      const decoded = jwt.verify(token, 'becabaed1197bc18773095f42aa2dec21c5e9f814a8049c9030e320513ba18460f51f3');
      const user = await User.findById(decoded.id); 
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
    }
  };