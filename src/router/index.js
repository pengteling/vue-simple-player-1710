import Vue from 'vue'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'User',
    path: '/user/:userid',
    component: User
  }
]
export default new Router({
  mode: 'hash',
  routes
})
/* 
route 单个路由 
routes 一组路由
router 路由管理
 */