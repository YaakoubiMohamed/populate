const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/event', eventController.getEvents);
router.post('/event', eventController.createEvents);

module.exports = router;