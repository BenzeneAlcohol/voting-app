const express = require('express');
const {displayPolls, createPolls, displaySpecificPoll, displaySpecificUser, votePoll} = require('../controllers/pollController');
const router = express.Router();
const {auth} = require('../middleware/auth');


router.get('/', displayPolls); //Will display ALL the polls, hence no authentication is required.
router.post('/', auth, createPolls);//Used to create a poll, hence authentication is required.
router.get('/dashboard', auth, displaySpecificUser);//Will display the polls of that specific signed in user.
router.get('/:id', displaySpecificPoll);//Will display a specific poll using its objectID.
router.post('/vote/:id', auth, votePoll);//Needs authentication.

module.exports = router;