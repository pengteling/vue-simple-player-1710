import Vue from 'vue'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'
import Category from '@/components/Category'
import Category2 from '@/components/Category2'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    // name: 'About',
    path: '/about',
    component: About,
    children:[
      {
        path:'',
        name:'About',        
        component:{ render:h=>h("div","About-index") }
      },
      {
        name: 'Tel',
        path: 'tel',
        component: { render:h=>h("div","tel:021-12345678") }
      },
      {
        name: 'Address',
        path: 'addr',
        component:{ render:h=>h("div","上海市XXx路") }
      }
    ]
  },
  {
    name: 'User',
    path: '/user/:userid',
    component: User
  },{
    name: 'Category',
    path: '/category',
    components:{
      default:Category,
      cHeader: Category2
    }
  }
]
export default new Router({
  mode: 'history',
  routes
})
/* 
route 单个路由 
routes 一组路由
router 路由管理
 */