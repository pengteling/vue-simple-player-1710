// import Vue from 'vue'
// alert("#3") 3432433434
import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  // render: h=>h(App)
  render(h) {
    return h(App)
  }
  //template:'<App />'
})//.$mount(document.getElementById('app'))
