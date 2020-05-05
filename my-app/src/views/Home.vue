<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col d-flex align-center justify-center>
        <div class="list-info">
          <p class="p-mb">Completed Tasks: {{ todos.filter(todo => { return todo.done === true }).length }}</p>
          <p>Pending Tasks: {{ todos.filter(todo => { return todo.done === false }).length }}</p>
        </div>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col>
        <CreateTodo v-on:create-todo="addTodo" />
      </v-col>
    </v-row>

    <v-row align="center" justify="center" d-block>
        <TodoList v-bind:todos="todos" />
        <br>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CreateTodo from '@/components/CreateTodo.vue'
import TodoList from '@/components/TodoList.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    CreateTodo,
    TodoList
  },
  methods: {
    ...mapActions(['addTodo']),
    addTodo(todo) {
      this.todos.push(todo);
    }
  },
  computed: {
    ...mapGetters({
      'todos': 'todostore/todosgetters'
    }),
  },
  created () {
    this.$store.dispatch('todostore/getTodo');
  }
};
</script>

<style lang="scss" scoped>
.list-info {
  text-align: -webkit-center;
}
.p-mb {
  margin-bottom: 1em;
}
</style>
