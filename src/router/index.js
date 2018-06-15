import Vue from 'vue'
import Home from '@/components/Home'
import About from '@/components/About'
// import User from '@/components/User'
const User = () => import('@/components/User') //懒加载
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
    // props: true,
    //props:{ sokey: 'vue' },
    props: (router)=>{
      return {
        userid:router.params.userid,
        sokey: router.query.sokey,
        sokey2: router.query.sokey2
      }
    },
    component: User,
    beforeEnter: (to, from, next) => {
      // ...
      console.log("beforeEnter")
      next()
    }
  },
  {
    name: 'Category',
    path: '/category',
    components:{
      default:Category,
      cHeader: Category2
    }
  },
  // {
  //   path: '/a',
  //   redirect: '/b'
  // },
  {
    path: '/a',
    component:{ render(h){ return h('div','alias')} },
    alias: ['/b','/c','/d/c']
  },
 
]
export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      console.log(savedPosition)
      sessionStorage.setItem(to.path,savedPosition.y)
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})
/* 
route 单个路由 
routes 一组路由
router 路由管理
 */