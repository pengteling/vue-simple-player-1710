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
})