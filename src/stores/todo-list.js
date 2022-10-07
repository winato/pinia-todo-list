import { defineStore } from "pinia";
import axios from "axios";

export const useTodoListStore = defineStore('TodoList', {
  state: () => ({
    todoList: [],
    id: 0,
    isLoading: false,
  }),
  getters: {
    total: (state) =>  state.todoList.length,
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
    },
    async generateRandomToDos() {
      const todoStore = useTodoListStore();

      this.isLoading = true;

      try {
        const toDosUrl = 'https://jsonplaceholder.typicode.com/todos'
        const { data } = await axios.get(toDosUrl);
  
        data.forEach(({ title }) => {
          todoStore.addTodo(title);
        });

        this.isLoading = false;
      } catch (e) {
        this.isLoading = false;
      }
    }
  }
})
