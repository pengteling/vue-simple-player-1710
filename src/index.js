// import Vue from 'vue'
// alert("#3") 3432433434
import Vue from 'vue'
import App from '@/App5.jsx'


new Vue({
  el: '#app',  
  components: {
    App
  },
  // render: h=>h(App)
  render(h) {
    return h(App)
  }
  //template:'<App />'
})//.$mount(document.getElementById('app'))
