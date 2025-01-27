<template>
  <div>
    <h2> {{ currentList }} tasks</h2>
    <div 
      v-for="task in filteredTasks" 
      :key="task.id" 
      class="task-row"
      @mouseover="hoveredTask = task.id" 
      @mouseleave="hoveredTask = null"
    >
      <TaskItem
        :task="task"
        @toggle-completion="toggleTaskCompletion"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTasksStore } from '../stores/tasks';
import TaskItem from './TaskItem.vue';

export default {
  components: { TaskItem },
  setup() {
    const route = useRoute();
    const tasksStore = useTasksStore();

    const currentList = computed(() => route.params.listName || 'default');
    const filteredTasks = computed(() =>
      tasksStore.tasks.filter((task) => task.list === currentList.value)
    );
    const hoveredTask = ref(null);

    return {
      filteredTasks,
      currentList,
      toggleTaskCompletion: tasksStore.toggleTaskCompletion,
      deleteTask: tasksStore.deleteTask,
      hoveredTask,
    };
  },
};
</script>

<style scoped>

.task-row {
  padding: 10px 15px;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.2s, transform 0.2s;
  margin-bottom: 10px;
  width: 1200px;
}

.task-row:hover {
  background-color: #f9f9f9; 
}

.task-row + .task-row {
  margin-top: 10px;
}

.task-row {
  min-height: 50px; 
}

.task-row:not(:last-child) {
  border-bottom: 1px solid #ccc;
}
</style>
