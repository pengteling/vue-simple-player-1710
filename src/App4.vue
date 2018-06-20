<template> 
  <Child>
    <div>test</div>
  </Child>
</template>

<script>
const Child = {
  template:`
  <div>
    <slot></slot>
  </div>
  `
}
export default {
  components:{
    Child
  }
}
</script>
