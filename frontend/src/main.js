import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // นำเข้า router

createApp(App)
  .use(router) // ใช้ router
  .mount('#app');
