const express = require('express');
const {register, login, forgotPassword, resetPassword} = require('../controllers/auth');
const router = express.Router();

router.post('/register',register);
// router.get('/register',register);
router.post('/login',login);
router.post('/forgotpassword',forgotPassword);
router.put('/resetpassword/:rtoken',resetPassword);

module.exports = router;