<template>
  <v-app class="full-screen-app">
    <Sidebar />
    <v-main style="padding: 20px 60px; justify-content: center;">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  components: { Sidebar },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}

.v-application {
  width: 100%;
  height: 100%;
}
</style>
