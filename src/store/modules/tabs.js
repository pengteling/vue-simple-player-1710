export default {
  namespaced:true,
  state:{
    filter:'All'
  },
  mutations:{
    changeFilter(state){
      state.filter = 'Active'
    }
  }
}