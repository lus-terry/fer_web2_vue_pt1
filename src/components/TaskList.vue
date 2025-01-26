<template>
  <div>
    <h2>Your Tasks for "{{ currentList }}"</h2>
    <!-- Iteracija kroz filtrirane zadatke -->
    <div v-for="task in filteredTasks" :key="task.id">
      <TaskItem
        :task="task"
        @toggle-completion="toggleTaskCompletion"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router'; // Za dohvaćanje trenutne rute
import { useTasksStore } from '../stores/tasks';
import TaskItem from './TaskItem.vue';

export default {
  components: { TaskItem },
  setup() {
    const route = useRoute(); // Trenutna ruta
    const tasksStore = useTasksStore();

    // Ime trenutne liste dohvaćeno iz parametara rute
    const currentList = computed(() => route.params.listName || 'default');

    // Filtrirani zadaci za trenutnu listu
    const filteredTasks = computed(() =>
      tasksStore.tasks.filter((task) => task.list === currentList.value)
    );

    return {
      filteredTasks,
      currentList,
      toggleTaskCompletion: tasksStore.toggleTaskCompletion,
      deleteTask: tasksStore.deleteTask,
    };
  },
};
</script>

<style scoped>
/* Stilovi za TaskList komponentu */
</style>
