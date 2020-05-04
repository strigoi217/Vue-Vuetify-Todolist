<template>
  <v-col class="list">
    <TodoItem
      v-on:delete-todo="deleteTodo" 
      v-on:complete-todo="completeTodo" 
      v-for="(todo,index) in todos" 
      v-bind:todo="todo" 
      v-bind:key="index"
    />
  </v-col>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  props: ["todos"],
  components: {
    TodoItem
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  text-align: -webkit-center;
}
</style>