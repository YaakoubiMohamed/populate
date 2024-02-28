const express = require('express');
const router = express.Router();
const participentController = require('../controllers/participantController');



router.post('/participant', participentController.createParticipant);


module.exports = router;