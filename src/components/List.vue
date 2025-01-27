<template>
  <div>
    <div class="header">
      <div class="date-container">
        <p class="month">{{ currentMonth }}</p> <!--PRIMJER-One-way Binding-->
        <p class="day">{{ currentDay }}</p>
      </div>

      <div class="title-container">
        <h1 class="greeting">{{ greetingMessage }}</h1>
        <h2 class="subtitle">What's your plan for today?</h2>
      </div>
    </div>

    <AddTaskForm />
    <TaskList />
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useTasksStore } from '../stores/tasks';
import AddTaskForm from '../components/AddTaskForm.vue';
import TaskList from '../components/TaskList.vue';

export default {
  components: { AddTaskForm, TaskList },
  setup() {
    const tasksStore = useTasksStore();

    onMounted(() => { //PRIMJER-Lifecycle hook
      tasksStore.fetchTasks();
    });

    const now = new Date();
    const currentMonth = ref(now.toLocaleString('en-US', { month: 'short' }));
    const currentDay = ref(now.getDate());

    const greetingMessage = computed(() => { //PRIMJER-computed 
      const hours = now.getHours();
      if (hours < 12) {
        return 'Good Morning.';
      } else if (hours < 18) {
        return 'Good Afternoon.';
      }
      return 'Good Evening.';
    });

    return { currentMonth, currentDay, greetingMessage };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #557509;
  padding: 20px;
  color: white;
  width: 1200px;
}

.date-container {
  text-align: center;
  margin-right: 20px;
}

.month {
  font-size: 14px;
  font-weight: bold;
}

.day {
  font-size: 24px;
  font-weight: bold;
}

.title-container {
  flex: 1;
}

.greeting {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.subtitle {
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  color: #ccc;
}
</style>
