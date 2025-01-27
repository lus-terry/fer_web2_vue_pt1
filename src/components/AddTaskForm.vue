<template>
  <form @submit.prevent="addNewTask" class="task-form">
    <!--PRIMJER-One-way Binding-->
    <input
      v-model="newTask" 
      type="text"
      placeholder="Enter a new task"
      class="task-input"
    />
    <v-btn type="submit" color="primary" class="custom-btn" style="height: 45px;">
      Add Task
    </v-btn>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTasksStore } from '../stores/tasks';

export default {
  setup() {
    const newTask = ref('');
    const route = useRoute();
    const tasksStore = useTasksStore();

    const addNewTask = () => { //PRIMJER-methods
      if (newTask.value.trim()) {
        tasksStore.addTask(newTask.value, route.params.listName);
        newTask.value = '';
      }
    };

    return { newTask, addNewTask };
  },
};
</script>

//PRIMJER-scoped style
<style scoped>
.task-form {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 1000px;
  margin: auto;
  padding-bottom: 20px;
}

.task-input {
  width: 800px;
  height: 50px;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
  outline: none;
}

.task-input:focus {
  border-color: #666;
}
</style>
