// import Vue from 'vue'
// alert("#3") 3432433434
import Vue from 'vue'
import App from '@/App'
import store from '@/store/index'

new Vue({
  el:'#app',
  store,
  components:{
    App
  },
  render: h=>h(App)
  //template:'<App />'
})//.$mount(document.getElementById('app'))
