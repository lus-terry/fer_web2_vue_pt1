<template>
  <div class="task-item">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle-completion', task.id)"
    />
    <span :class="{ completed: task.completed }">{{ task.text }}</span>
    <button @click="$emit('delete-task', task.id)">X</button>
  </div>
</template>

<script>
export default {
  props: ['task'],
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
</style>
