// import Vue from 'vue'
// alert("#3") 3432433434
import Vue from 'vue'
import App from '@/App2'
import router from '@/router/index'

router.beforeEach((to,from,next)=>{
  console.log("beforeEach")
  next()
})
router.beforeResolve((to,from,next)=>{
  console.log("beforeResolve")
  next()
})
router.afterEach((to,from)=>{
  console.log("afterEach")
  //alert("afterEach")
})

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
