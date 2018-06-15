<script>
const ChildComponent = {
  props:['name'],
  render(){
    return (
      <div class="jsx">
        name: {this.name}
      </div>
    )
  }
}
export default {
  name: 'App',
  components: {
    ChildComponent
  },
  
  template:`   
        <ChildComponent name="zhang san"></ChildComponent>
        `
      
   
  
}

</script>