<template>
  <v-navigation-drawer app permanent :width="300" class="drawer">
    <v-list-item title="To-Do App" class="pa-4" />
    <v-divider />
    <v-list-item subtitle="My lists" class="pa-4" />

    
    <v-list>
      <v-list-item
        v-for="list in lists"
        :key="list.route"
        :to="list.route"
        link
        class="pa-4 list-item"
      >
        <v-list-item-title class="list-name">{{ list.name }}</v-list-item-title>
        <button @click.stop="deleteList(list.route)" class="delete-btn">X</button>
      </v-list-item>
    </v-list>

    <v-divider />

   
    <div class="btn-container">
      <v-btn color="primary" class="custom-btn" @click="addNewList">
        + Add List
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useListsStore } from '../stores/lists';

export default {
  setup() {
    const listsStore = useListsStore(); //PRIMJER-komponenta sa stanjem
    const lists = computed(() => listsStore.lists);

    onMounted(() => {
      listsStore.fetchLists();
    });

    const addNewList = () => {
      const newListName = prompt('Enter the name of the new list:');
      if (newListName) {
        listsStore.addList(newListName);
      }
    };

    const deleteList = (route) => {
      if (confirm('Are you sure you want to delete this list?')) {
        listsStore.deleteList(route);
      }
    };

    return {
      lists,
      addNewList,
      deleteList,
    };
  },
};
</script>

<style scoped>
.drawer {
  background-color: #f4f4f4;
}

.btn-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.custom-btn {
  width: 80%;
}

.list-item {
  display: flex;
  align-items: center;
  position: relative;
}

.list-name {
  font-size: 16px;
  font-weight: 500;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.delete-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 10px;
}

.delete-btn:hover {
  color: darkred;
}
</style>
