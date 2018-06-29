import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'
import tabs from './modules/tabs'
Vue.use(Vuex)
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules:{
    todos,
    tabs
  }
  // state:{
  //   todos:[],
  //   filter:'All'
  // },
  // getters:{
  //   todosView(state){
  //     if (state.filter === "All") {
  //       return state.todos;
  //     } else if (state.filter === "Active") {
  //       return state.todos.filter(v => v.isCompleted === false)
  //     } else {
  //       return state.todos.filter(v => v.isCompleted === true)
  //     }
  //   },
  //   leftItemsCount(state){
  //     return state.todos.reduce((t, v) => {
  //       if (v.isCompleted === false) {
  //         t = t + 1;
  //       }
  //       return t;
  //     }, 0);
  //   },
  //   isHaveCompleted(state){
  //     return state.todos.some(v => v.isCompleted === true)
  //   }
  // },
  // mutations:{
  //   addTodo(state, todo) {     
  //     state.todos.unshift(todo);
  //   },
  //   deleteTodo(state, todo){
  //     state.todos = state.todos.filter(v => v !== todo)
  //   },
  //   toggleFilter(state, filter){
  //     state.filter = filter
  //   },
  //   clearCompleted(state){
  //     state.todos = state.todos.filter(v => v.isCompleted === false)
  //   },
  //   updateTodo(state, todo){
  //     state.todos = state.todos.map(item=>{
  //       if(todo === item ) {
  //         return Object.assign({},item, {isCompleted: !item.isCompleted})
  //         // return {...todo,  isCompleted:!todo.isCompleted }
  //       }else{
  //         return item
  //       }
  //     })
  //   }
  // },
  // actions:{}
})