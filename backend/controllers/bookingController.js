const pool = require('../models/db');

exports.bookSeat = async (req, res) => {
  const { movieId, seatId } = req.body;
  try {
    await pool.query('UPDATE seats SET is_booked = true WHERE id = $1', [seatId]);
    const result = await pool.query(
      'INSERT INTO bookings (movie_id, seat_id) VALUES ($1, $2) RETURNING *',
      [movieId, seatId]
    );
    res.json({ message: 'Seat booked', booking: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Booking failed' });
  }
};

exports.getLastBooking = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT bookings.id, movies.title, seats.seat_number FROM bookings JOIN movies ON bookings.movie_id = movies.id JOIN seats ON bookings.seat_id = seats.id ORDER BY bookings.id DESC LIMIT 1'
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching booking' });
  }
};
