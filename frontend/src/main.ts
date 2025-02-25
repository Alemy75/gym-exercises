import { createApp } from 'vue';
import './assets/normalize.css';
import './assets/tailwind.css';
import App from './App.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

createApp(App).use(VueQueryPlugin).mount('#app');
