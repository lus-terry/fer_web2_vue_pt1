<template>
    <v-navigation-drawer app permanent :width="242">
      <!-- Naslov unutar sidebara -->
      <v-list-item title="To-Do App" subtitle="Manage Your Lists" />
  
      <v-divider />
  
      <!-- Dinamične navigacijske stavke -->
      <v-list>
        <v-list-item
          v-for="list in lists"
          :key="list.route"
          :to="list.route"
          link
        >
          <v-list-item-title>{{ list.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
  
      <v-divider />
  
      <!-- Gumb za dodavanje nove liste -->
      <v-btn color="primary" block @click="addNewList">
        + Add List
      </v-btn>
    </v-navigation-drawer>
  </template>
  
  <script>
  import { useListsStore } from '../stores/lists';
  
  export default {
    setup() {
      const listsStore = useListsStore();
  
      const addNewList = () => {
        const newListName = prompt('Enter the name of the new list:'); // Pojavi se dialog za unos imena
        if (newListName) {
          listsStore.addList(newListName);
        }
      };
  
      return {
        lists: listsStore.lists,
        addNewList,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Dodaj stilove ako je potrebno */
  </style>
  