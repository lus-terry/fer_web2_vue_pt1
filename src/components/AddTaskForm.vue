<template>
  <form @submit.prevent="addNewTask">
    <input v-model="newTask" type="text" placeholder="Enter a new task" />
    <button type="submit">Add Task</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router'; // Dohvati trenutnu rutu
import { useTasksStore } from '../stores/tasks';

export default {
  setup() {
    const newTask = ref('');
    const route = useRoute(); // Trenutna ruta
    const tasksStore = useTasksStore();

    const addNewTask = () => {
      console.log('Attempting to add new task:', newTask.value); // Debugging
      if (newTask.value.trim()) {
        // Koristi ispravnu metodu iz store-a
        tasksStore.addTask(newTask.value, route.params.listName); 
        newTask.value = '';
        console.log('Task added successfully');
      } else {
        console.error('Task cannot be empty'); // Debugging
      }
    };

    return { newTask, addNewTask };
  },
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}
</style>
