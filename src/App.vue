<template>
  <v-app>
    <!-- Navigacija sa sidebarom -->
    <Sidebar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { onMounted } from 'vue'; // Lifecycle hook
import { useTasksStore } from './stores/tasks'; // Pinia store
import Sidebar from './components/Sidebar.vue'; // Sidebar komponenta

export default {
  components: { Sidebar },
  setup() {
    const tasksStore = useTasksStore(); // Pristup Pinia store-u

    // Pozivanje fetchTasks() pri pokretanju aplikacije
    onMounted(() => {
      console.log('App.vue mounted, fetching tasks...'); // Debugging
      tasksStore.fetchTasks(); // Dohvati zadatke iz LocalStorage-a
    });

    return {};
  },
};
</script>

<style>
/* Globalni stilovi aplikacije */
</style>
