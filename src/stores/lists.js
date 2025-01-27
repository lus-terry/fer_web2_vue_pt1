import { defineStore } from 'pinia'; 
//PRIMJER-Pinia
export const useListsStore = defineStore('lists', {
  state: () => ({
    lists: [], 
  }),
  actions: {
    fetchLists() { //PRIMJER-asinkroni dohvat
      try {
        const storedLists = JSON.parse(localStorage.getItem('lists')) || [];
        if (storedLists.length > 0) {
          this.lists = [...storedLists]; 
          console.log('Fetched lists from localStorage:', this.lists);
        } else {
          this.lists = [
            { name: 'Life', route: '/life' },
            { name: 'Work', route: '/work' },
            { name: 'School', route: '/school' },
          ];
          this.saveLists();
          console.log('Initialized default lists:', this.lists);
        }
      } catch (error) {
        console.error('Error fetching lists:', error);
      }
    },

    addList(newListName) {
      if (this.lists.length >= 13) {
        alert('You cannot add more than 13 lists!');
        return;
      }

      const route = `/${newListName.toLowerCase()}`;
      if (!this.lists.some((list) => list.route === route)) {
        this.lists.push({ name: newListName, route });
        this.saveLists();
        console.log('List added:', this.lists);
      } else {
        alert('List with this name already exists!');
      }
    },

    deleteList(route) {
      const listIndex = this.lists.findIndex((list) => list.route === route);
      if (listIndex !== -1) {
        this.lists.splice(listIndex, 1); // Brisanje liste
        this.saveLists();
        console.log(`List with route "${route}" deleted.`);
      } else {
        console.error('List not found for deletion:', route);
      }
    },

    saveLists() {
      try {
        localStorage.setItem('lists', JSON.stringify(this.lists));
        console.log('Lists saved to localStorage:', this.lists);
      } catch (error) {
        console.error('Error saving lists:', error);
      }
    },
  },
});
