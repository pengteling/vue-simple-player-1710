<template>
  <div>
    <!-- User: {{ $route.params.userid }}
    {{ $attrs }}
    {{ sokey }} -->
    {{ userid }}
    {{ sokey }}
    {{ sokey2 }}
  </div>
</template>
<script>
export default {
  props:['userid',"sokey","sokey2"],
  beforeRouteEnter (to, from, next) {
    // ...
    console.log("beforeRouteEnter")
    next()
    // setTimeout(()=>{
    //   if(true){
    //     next()
    //   }else{
    //     // eventBus.$emit('send',)
    //   }
    // },3000)
    
  },
  beforeRouteLeave(to,from,next){
    console.log("beforeRouteLeave")
    next()
  },
  beforeRouteUpdate(to,from,next){
    console.log("beforeRouteUpdate")
    next()
  },
  updated(){
    
  },
  created(){
    // setTimeout(()=>{

    // },3000)
  },
  mounted(){
    // sessionStorage.getItem(this.$route.path)
    setTimeout(()=>window.scrollTo(0,sessionStorage.getItem(this.$route.path)*1),3000)
    
  }
  
}
</script>
