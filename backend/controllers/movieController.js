const pool = require('../models/db');

exports.getMovies = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movies');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching movies' });
  }
};

exports.getSeats = async (req, res) => {
  const movieId = req.params.movieId;
  try {
    const result = await pool.query('SELECT * FROM seats WHERE movie_id = $1', [movieId]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching seats' });
  }
};
