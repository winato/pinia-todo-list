<script setup>

import { useTodoListStore } from '../stores/todo-list';
import { storeToRefs } from 'pinia';

const store = useTodoListStore();

const { todoList, total } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;

</script>

<template>
  <p>
    Total: {{ total }}
  </p>
  <ul>
    <li v-for="todo in todoList" :key="todo.id" class="item">
      <div class="content">
        <span :class="{ completed: todo.completed }">
          {{ todo.item }}
        </span>
        <span @click.stop="toggleCompleted(todo.id)">
          &#10004;
        </span>
        <span @click.stop="deleteTodo(todo.id)" class="x">
          &#10060;
        </span>
      </div>
    </li>
  </ul>
</template>

<style scoped>

.completed {
  text-decoration: line-through;
}

</style>
