export default {
  namespaced: true,
  state: {
    todos: []
  },
  getters: {
    todosView(state, getters, rootState, rootGetters) {
      if (rootState.tabs.filter === "All") {
        return state.todos;
      } else if (rootState.tabs.filter === "Active") {
        return state.todos.filter(v => v.isCompleted === false)
      } else {
        return state.todos.filter(v => v.isCompleted === true)
      }
    },
    leftItemsCount(state) {
      return state.todos.reduce((t, v) => {
        if (v.isCompleted === false) {
          t = t + 1;
        }
        return t;
      }, 0);
    },
    isHaveCompleted(state) {
      return state.todos.some(v => v.isCompleted === true)
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.unshift(todo);
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(v => v.isCompleted === false)
    },
    deleteTodo(state, todo) {
      state.todos = state.todos.filter(v => v !== todo)
    },
    updateTodo(state, todo) {
      state.todos = state.todos.map(item => {
        if (todo === item) {
          return Object.assign({}, item, { isCompleted: !item.isCompleted })
          // return {...todo,  isCompleted:!todo.isCompleted }
        } else {
          return item
        }
      })
    }
  }
}