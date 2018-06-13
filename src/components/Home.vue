<template>
  <div>
    Home
    {{ $route.name }}
    <button @click="handlerClick">Click</button>
    <div style="height:2000px; background:#333">test</div>
  </div>
</template>
<script>
import { EventBus } from '@/EventBus'
export default {
  methods:{
    handlerClick(){
      EventBus.$emit('sendmsg','hi,vue!')
    }
  }
}
</script>

