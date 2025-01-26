<template>
  <div>
    <h1>To-Do App</h1>
    <AddTaskForm />
    <TaskList />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useTasksStore } from '../stores/tasks';
import AddTaskForm from '../components/AddTaskForm.vue';
import TaskList from '../components/TaskList.vue';

export default {
  components: { AddTaskForm, TaskList },
  setup() {
    const tasksStore = useTasksStore(); // Dohvati Pinia store

    // Lifecycle hook za dohvaćanje zadataka
    onMounted(() => {
      console.log('Fetching tasks on mount...');
      tasksStore.fetchTasks();
    });

    return {};
  },
};
</script>
