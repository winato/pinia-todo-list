<script setup>

import TodoList from './TodoList.vue';
import TodoForm from './TodoForm.vue';

</script>

<template>

  <div class="w-100">
    <div class="card p-5 my-2">
      <h1 class="text-center mb-4">
        To Do List
      </h1>

      <todo-form />
      <todo-list/>
    </div>
  </div>

</template>
