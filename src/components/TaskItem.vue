<template>
  <div class="task-item">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle-completion', task.id)" 
    />
    <span :class="{ completed: task.completed }">{{ task.text }}</span>
    <button class="delete-btn" @click="$emit('delete-task', task.id)">X</button> <!--PRIMJER-emitiranje eventa-->
  </div>
</template>

<script>
export default {
  props: ['task'], //PRIMJER-bez stanja
};
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.completed {
  text-decoration: line-through;
}
.delete-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
.delete-btn:hover {
  color: darkred;
}
</style>
