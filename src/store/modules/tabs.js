export default {
  namespaced: true,
  state: {
    filter: 'All'
  },
  mutations: {    
    toggleFilter(state, filter) {
      state.filter = filter
    },
  }
}