<template>
  <div>
    <h2>Movies</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.description }}</p>
        <button @click="bookTicket(movie.id)">Book Ticket</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      movies: []
    };
  },
  async created() {
    try {
      const response = await axios.get('/api/movies');
      this.movies = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    bookTicket(movieId) {
      this.$router.push(`/seat-selection?movieId=${movieId}`);
    }
  }
};
</script>
