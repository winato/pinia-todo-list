<script setup>
import TodoListItem from '@/components/TodoListItem.vue';
import { useTodoListStore } from '@/stores/todo-list.js';
import { storeToRefs } from 'pinia';

const store = useTodoListStore();
const { generateRandomToDos } = store;
const { todoList, total, isLoading } = storeToRefs(store);

</script>

<template>
  <p>
    Total: {{ total }}
  </p>
  <ul class="list-group-flush ps-0" v-if="todoList.length">
    <TodoListItem v-for="todo in todoList" :key="todo.id" :todo="todo"/>
  </ul>
  <div v-else @click="generateRandomToDos" class="btn btn-link btn-small">
    Generate random list
  </div>
  <p v-if="isLoading && !todoList.length" class="text-center">
    Loading...
  </p>
</template>
