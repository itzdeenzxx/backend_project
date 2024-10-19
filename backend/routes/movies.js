const express = require('express');
const { getMovies, getSeats } = require('../controllers/movieController');
const router = express.Router();

router.get('/', getMovies);
router.get('/:movieId/seats', getSeats);

module.exports = router;
