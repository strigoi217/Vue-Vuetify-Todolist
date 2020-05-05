import api from '../utils/http'
export const todostore = {
    namespaced: true,
    state: {
      todos: [],
      newTodo: ''
    },
    mutations: {
      GET_TODO(state, todo){
        state.todos = todo
      },
      ADD_TODO(state, todo) {
        state.todos = [...state.todos, todo]
      },
      EDIT_TODO(state, todo){
        state.todos = []
        console.log('todo', todo)
        todo.map(item => {
          state.todos.push(item)
        })
      },
      REMOVE_TODO(state, todo){
         var todos = state.todos
         todos.splice(todos.indexOf(todo), 1)
      },
      COMPLETE_TODO(state, todo){
        todo.done = !todo.done
      }
     },
    actions: {
      getTodo({commit}){
        api.get("/todos/list").then(response => {
          commit('GET_TODO', response.data);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
      },
      addTodo({commit}, todo) {
        api.post('/todos/create', todo)
          .then(response => {
            commit('ADD_TODO', response.data)
          })
      },
      editTodo({commit}, todo){
        console.log('todoupdate',todo)
        api.put("/todos/update/"+ todo.id, todo).then(response => {
          console.log('update', response)
          commit('EDIT_TODO', response.data)
        });
      },
      removeTodo({commit}, todo){
        api.delete("/todos/delete/"+todo._id).then(response => {
          console.log('delete', response)
          commit('REMOVE_TODO', todo)
        });
      },
      completeTodo({commit}, todo){
       commit('COMPLETE_TODO', todo)
      }
    },
    getters: {
        todosgetters(state) {
            return state.todos;
        }
    }
}