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
    
  }
}
</script>
