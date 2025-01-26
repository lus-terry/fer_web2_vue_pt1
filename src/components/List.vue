<template>
    <div>
      <h1>{{ currentListName }} Tasks</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  import AddTaskForm from '../components/AddTaskForm.vue';
  import TaskList from '../components/TaskList.vue';
  
  export default {
    components: { AddTaskForm, TaskList },
    setup() {
      const route = useRoute();
  
      // Trenutna lista iz URL-a
      const currentListName = computed(() => route.params.listName || 'Default');
  
      return {
        currentListName,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Dodaj stilove ako je potrebno */
  </style>
  