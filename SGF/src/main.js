// src/main.js
import './assets/style.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import VueApexCharts from 'vue3-apexcharts';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueApexCharts); // Registra o ApexCharts como plugin global

app.mount('#app');
