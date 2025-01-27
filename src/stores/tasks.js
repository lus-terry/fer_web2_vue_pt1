import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    fetchTasks() {
      try {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        if (storedTasks.length > 0) {
          this.tasks = storedTasks;
        } else {
          this.tasks = [
            { id: 1, text: 'task example', completed: false, list: 'life' },
          ];
          this.saveTasks();
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },

    addTask(taskText, listName) {
      if (taskText.trim()) {
        const newTask = {
          id: Date.now(),
          text: taskText.trim(),
          completed: false,
          list: listName,
        };
        this.tasks.push(newTask);
        this.saveTasks();
      }
    },

    toggleTaskCompletion(taskId) {
      const task = this.tasks.find((t) => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        this.saveTasks();
      }
    },

    deleteTask(taskId) {
      const taskIndex = this.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
        this.saveTasks();
      }
    },

    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
  },
});
