// const ChildComponent = {
//   props:['name'],
//   render(){
//     return (
//       <div class="jsx">
//         name: {this.name}
//       </div>
//     )
//   }
// }
const ChildComponent = ({props,listeners}) => {
  return (
    <div class="jsx" onClick={listeners}>
      name: {props.name}
      { 
        props.name === 'zs' ? 
          <div>zs</div>
          : 
          <div>!zs</div>       
      }
    </div>
  )
}
export default {
  name: 'App',
  render(){
    return (
      <div>
        <ChildComponent name="zhang san"></ChildComponent>
      </div>
    )
  }
}