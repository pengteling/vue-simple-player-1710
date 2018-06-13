<template>
  <div>
    About {{ $route.name }}
    <nav>
      <router-link to="/about/tel">电话</router-link>
      <router-link to="/about/addr">地址</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import { EventBus } from '@/EventBus'
export default {
  data(){
    return{

      msg:''
    }
  },
  mounted(){
    EventBus.$on('sendmsg', (txt)=>{
      console.log(txt)
      this.msg = txt
    })
  }
}
</script>

