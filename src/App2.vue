<template>
  <FunctionalComponent 
    :prop1="prop1"
    @doEvent="doEvent"
  >
    这是FunctionalComponent
  </FunctionalComponent>
</template>
<script>
import FunctionalComponent from '@/components/functionalComponent'
export default {
  data(){
    return { 
      prop1: 123
    }
  },
  components:{
    FunctionalComponent
  },
  methods:{
    doEvent(){
      console.log("do");
    }
  }
}
</script>
