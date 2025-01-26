import { defineStore } from 'pinia';

export const useListsStore = defineStore('lists', {
  state: () => ({
    lists: [
      { name: 'Default', route: '/' },
      { name: 'Work', route: '/work' },
      { name: 'School', route: '/school' },
      { name: 'Life', route: '/life' },
    ],
  }),
  actions: {
    addList(newListName) {
      const route = `/${newListName.toLowerCase()}`; // Dinamički generiraj rutu
      if (!this.lists.some((list) => list.route === route)) {
        this.lists.push({ name: newListName, route });
      } else {
        alert('List with this name already exists!');
      }
    },
  },
});
