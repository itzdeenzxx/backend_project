<template>
  <div>
    <h2>Your Ticket</h2>
    <p>Movie: {{ ticket.movie.title }}</p>
    <p>Seat: {{ ticket.seat.seat_number }}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      ticket: {}
    };
  },
  async created() {
    try {
      const response = await axios.get('/api/bookings/last');
      this.ticket = response.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>
