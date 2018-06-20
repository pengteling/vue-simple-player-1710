

<script>
export default{
  functional:true, 
  render(h, { props, slots,listeners}){
    console.log(props)
    console.log(listeners)
  }
}
</script>
<template functional>
  <div>
    {{ props.prop1 }}
    {{ listeners.doEvent() }}
    {{ slots().default }}
  </div>
</template>
