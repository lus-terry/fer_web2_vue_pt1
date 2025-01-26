// Uvoz glavnog CSS-a za aplikaciju. Ovo uključuje stilove koji će se primijeniti globalno u aplikaciji.
import './assets/main.css'

// Uvoz funkcije createApp iz Vue-a. Ovo je glavna metoda za kreiranje Vue aplikacije.
import { createApp } from 'vue'

// Uvoz funkcije createPinia iz Pinia biblioteke. Pinia je moderna zamjena za Vuex, korištena za upravljanje stanjem (state management) u aplikaciji.
import { createPinia } from 'pinia'

// Uvoz glavne Vue komponente aplikacije, `App.vue`. Ovo je početna komponenta koja sadrži glavni layout i strukturu aplikacije.
import App from './App.vue'

// Uvoz router-a koji upravlja navigacijom između različitih stranica (route-ova) unutar aplikacije.
import router from './router'

import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Uvoz Vuetify CSS-a

// Tema (opcionalno)
const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          colors: {
            primary: '#6200ea',
            secondary: '#03dac6',
            accent: '#ff5722',
          },
        },
      },
    },
  });
  

// Kreiranje instance Vue aplikacije koristeći `createApp` i prosljeđivanje glavne komponente `App`.
const app = createApp(App)

// Registracija Pinia store-a u aplikaciju. Ovo omogućava globalno upravljanje stanjem pomoću Pinia.
app.use(createPinia())

app.use(vuetify);

// Registracija router-a u aplikaciju. Ovo omogućava navigaciju između različitih stranica unutar aplikacije.
app.use(router)

// Montiranje aplikacije na HTML element s `id="app"`. Ovaj element treba postojati u `index.html` datoteci, a unutar njega će se prikazivati aplikacija.
app.mount('#app')
