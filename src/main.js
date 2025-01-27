import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#688f09',
          secondary: '#219717',
          accent: '#ff5722',
        },
      },
    },
  },
});

const app = createApp(App);
app.use(createPinia());
app.use(vuetify);
app.use(router);
app.mount('#app');
