import { defineStore } from "pinia";

export const useTodoListStore = defineStore('TodoList', {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  getters: {
    total: () =>  this.todoList.length,
  },
  actions: {
    addTodo(item) {
      this.todoList = [{ item, id: this.id++, completed: false }, ...this.todoList];
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter(({ id }) => id !== itemId);
    },
    toggleCompleted(itemId) {
      const todo = this.todoList.find(({ id }) => id === itemId);

      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
})
