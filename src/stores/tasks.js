import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [], // Početni popis zadataka
  }),
  actions: {
    // Dohvaćanje zadataka iz LocalStorage ili postavljanje mock podataka
    fetchTasks() {
      try {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        if (storedTasks.length > 0) {
          this.tasks = storedTasks;
          console.log('Fetched tasks from localStorage:', this.tasks);
        } else {
          // Ako nema spremljenih podataka, postavi mock zadatke
          const mockTasks = [
            { id: 1, text: 'Learn Vue 3', completed: false, list: 'work' },
            { id: 2, text: 'Build a To-Do App', completed: true, list: 'school' },
          ];
          this.tasks = mockTasks;
          this.saveTasks(); // Spremanje mock podataka
          console.log('Fetched mock tasks:', this.tasks);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },

    // Dodavanje novog zadatka
    addTask(taskText, listName) {
      if (!taskText || typeof taskText !== 'string') {
        console.error('Task text must be a non-empty string');
        return;
      }
      const newTask = {
        id: Date.now(), // Jedinstveni ID
        text: taskText.trim(), // Trimanje teksta za uklanjanje praznina
        completed: false,
        list: listName, // Povezano s listom
      };
      this.tasks.push(newTask); // Dodavanje zadatka na popis
      this.saveTasks(); // Spremanje u lokalnu pohranu
      console.log('Task added:', newTask); // Debugging
    },

    // Označavanje zadatka kao dovršenog/undovršenog
    toggleTaskCompletion(taskId) {
      const task = this.tasks.find((t) => t.id === taskId);
      if (!task) {
        console.error('Task not found with ID:', taskId);
        return;
      }
      task.completed = !task.completed; // Prebacivanje statusa
      this.saveTasks(); // Spremanje promjena
      console.log('Task toggled:', task); // Debugging
    },

    // Brisanje zadatka prema ID-u
    deleteTask(taskId) {
      const taskIndex = this.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex === -1) {
        console.error('Task not found with ID:', taskId);
        return;
      }
      const deletedTask = this.tasks.splice(taskIndex, 1)[0]; // Uklanjanje iz liste
      this.saveTasks(); // Spremanje promjena
      console.log('Task deleted:', deletedTask); // Debugging
    },

    // Spremanje zadataka u LocalStorage
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      console.log('Tasks saved to localStorage');
    },
  },
});
