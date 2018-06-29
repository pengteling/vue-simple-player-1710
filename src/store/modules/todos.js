export default {
  state:{
    todos:[]
  },
  mutations:{
    addTodo(state, todo) {     
      state.todos.unshift(todo);
    }
  }
}