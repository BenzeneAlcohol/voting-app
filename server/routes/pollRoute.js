const express = require('express');
const {displayPolls, createPolls, displaySpecificPoll, displaySpecificUser} = require('../controllers/pollController');
const router = express.Router();
const {auth} = require('../middleware/auth');


router.get('/', displayPolls);
router.post('/', auth, createPolls);
router.get('/user', auth, displaySpecificUser);
router.get('/:id', auth, displaySpecificPoll);

module.exports = router;