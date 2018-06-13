<template>
  <div class="demo">
    <h2>路由</h2>
    <nav>
      <!-- <a href="#/">Home</a>
      <a href="#/about">About</a> -->
      <router-link :to="{name:'Home'}">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link :to="{name:'About'}">About</router-link>
      <router-link to="/user/512?kk=123">User</router-link>
      <router-link :to="{name:'User',params:{userid: 512} ,query:{kkk:123} }">User</router-link>
    </nav>
    <transition name="slider">
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
    <router-view name="cHeader"></router-view>
  </div>
</template>
<script>
export default {
  // mounted(){
  //   console.log(this.$router)
  //   setTimeout(()=>{
  //       this.$router.push('/about'),
  //       setTimeout(()=>{
  //         this.$router.push('/user/512')
  //       },3000)
  //   },3000)
  // }
}
</script>
<style>
.slider-enter-active, .slider-leave-active{
  transition:all 0.5s;
}
.slider-enter{
  opacity: 0;
  transform: translate3d(-300px,0,0)
}
.slider-leave-to{
  opacity: 0;
  transform: translate3d(300px,0,0)
}
.demo > div{
  position: absolute;
}
</style>

