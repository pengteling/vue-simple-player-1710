
// const ChildComponent = {
//   functional: true,
//   props: {
//     name: String,
//     age: Number,
//   },
//   render(h, { props }) {
//     return (
//       <div class="child-jsx">
//         <h3>{props.name} - {props.age}</h3>
//       </div>
//     )
//   },
// }
const ChildComponent = {
  props:['name','age'],
  render(){
    return(
      <div class="child-jsx">
        <h3>{this.name} - {this.age}</h3>
      </div>
    )
  }
}

// 

export default {
  data: () => ({
    list: [
      { name: 'zs', age: 18 },
      { name: 'ls', age: 17 },
    ],
  }),
  render() {
    return (
      <section>
        {
          this.list.map(o =>
            {
              console.log( {...{ props: o }} )
              return(
                <ChildComponent
                  key={o.name}
                  {...{ props: o }} 
                  //{...o}
                />
              )
            }
            )
          // React 版
          // <ChildComponent
          //  key={o.name}
          //  {...o} />)
        }
      </section>
    );
  },
};

