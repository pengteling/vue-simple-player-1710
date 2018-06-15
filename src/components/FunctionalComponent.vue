

<script>
// export default{
//   functional:true, 
//   render(h, context){
//     console.log(context.props)
//     console.log(context.listeners)
//   }
// }
</script>
<template functional>
  <div>
    {{ props.prop1 }}
    {{ listeners.doEvent() }}
    {{ slots().default }}
  </div>
</template>
