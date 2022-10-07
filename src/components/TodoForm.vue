<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '../stores/todo-list';

const todo = ref('');

const store = useTodoListStore();

const addItemAndClear = (item) => {
  if (item.length === 0) return; 

  store.addTodo(item);
  todo.value = '';
}

</script>

<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)" class="d-flex mb-2">
      <input v-model="todo" type="text" class="form-control me-2">
      <button class="btn btn-primary">Add</button>
    </form>
  </div>
</template>
