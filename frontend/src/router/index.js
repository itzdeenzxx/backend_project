// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import MovieList from '../components/MovieList.vue';
import SeatSelection from '../components/SeatSelection.vue';
import Ticket from '../components/Ticket.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/movies', component: MovieList },
  { path: '/seat-selection', component: SeatSelection },
  { path: '/ticket', component: Ticket }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
