const express = require('express');
const { bookSeat, getLastBooking } = require('../controllers/bookingController');
const router = express.Router();

router.post('/', bookSeat);
router.get('/last', getLastBooking);

module.exports = router;
