<template>
  <div>
    <h2>Select a Seat</h2>
    <div v-for="seat in seats" :key="seat.id" @click="selectSeat(seat)" :class="{ booked: seat.is_booked, selected: seat.id === selectedSeatId }">
      Seat {{ seat.seat_number }}
    </div>
    <button @click="confirmBooking">Confirm Booking</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      seats: [],
      selectedSeatId: null
    };
  },
  async created() {
    const movieId = this.$route.query.movieId;
    try {
      const response = await axios.get(`/api/movies/${movieId}/seats`);
      this.seats = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    selectSeat(seat) {
      if (!seat.is_booked) {
        this.selectedSeatId = seat.id;
      }
    },
    async confirmBooking() {
      const movieId = this.$route.query.movieId;
      try {
        await axios.post(`/api/bookings`, {
          movieId,
          seatId: this.selectedSeatId
        });
        this.$router.push('/ticket');
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
.booked {
  background-color: red;
}
.selected {
  background-color: green;
}
</style>
