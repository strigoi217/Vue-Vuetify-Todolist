export const todostore = {
    namespaced: true,
    state: {
      todos: [
        {
            title: "Todo A",
            project: "Project A",
            done: false
        },
        {
            title: "Todo B",
            project: "Project B",
            done: true
        },
        {
            title: "Todo C",
            project: "Project C",
            done: false
        },
        {
            title: "Todo D",
            project: "Project D",
            done: false
        }
      ],
      newTodo: ''
    },
    mutations: {
      GET_TODO(state, todo){
        state.newTodo = todo
      },
      ADD_TODO(state, todo) {
        state.todos.push({
            title: todo.title,
            project: todo.project,
            done: todo.done
        })
      },
      EDIT_TODO(state, todo){
         var todos = state.todos
         todos.splice(todos.indexOf(todo), 1)
         state.todos = todos
         state.newTodo = todo.body
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
      getTodo({commit}, todo){
        commit('GET_TODO', todo)
      },
      addTodo({commit}, todo){
          console.log('addTodo')

        commit('ADD_TODO', todo)
      },
      editTodo({commit}, todo){
        commit('EDIT_TODO', todo)
      },
      removeTodo({commit}, todo){
        commit('REMOVE_TODO', todo)
      },
      completeTodo({commit}, todo){
       commit('COMPLETE_TODO', todo)
      }
    },
    getters: {
        todosgetters(state) {
            console.log(state.todos)
            return state.todos;
        }
    }
}