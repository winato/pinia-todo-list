<script setup>

import { useTodoListStore } from '../stores/todo-list';

defineProps({
  todo: Object,
})

const store = useTodoListStore();

const { toggleCompleted, deleteTodo } = store;

</script>

<template>
    <li class="list-group-item">
      <div class="d-flex justify-content-between">
        <p :class="{ completed: todo.completed }" class="me-2 mb-0">
          {{ todo.item }}
        </p>
        <div>
          <div @click="toggleCompleted(todo.id)" class="btn btn-success btn-sm me-1">
            &#10004;
          </div>
          <div @click.stop="deleteTodo(todo.id)" class="btn btn-danger btn-sm">
            &#10006;
          </div>
        </div>
      </div>
    </li>
</template>

<style scoped>

.completed {
  text-decoration: line-through;
}

</style>
