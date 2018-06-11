<template>
  <div>
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
    <router-view></router-view>
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

