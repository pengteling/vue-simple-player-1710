// const Child={
//   functional:true,
//   render(h,{slots}){
//     return (     

//        slots().default
      
//        )
//     // return (
//     //   <div>test</div>
//     // )
   
//   }
// }

const Child = ({slots}) => {
  return slots().default
  return (
    <div>
     
    </div>
  )
}

export default {
  render(){
    return (
      <section>
        <Child>
          <div>test</div>
        </Child>
      </section>
    )
  }
}




// // const PermissionComponent = {
// //   functional: true,
// //   render(h, { props, slots }) {
// //     return slots().default;
// //   }
// //   // render(h, { props, slots }) {
// //   //   const { permissionCode } = props;
// //   //   if (permissionCode === 0) {
// //   //     return null;
// //   //   }
// //   //   return slots().default;
// //   // },
// // };

// const PermissionComponent = ({ props, slots }) => {
//   const { permissionCode } = props
//   if (permissionCode === 0) {
//     return null
//   }
//   return slots().default
//   return (
//     <div>
//       {slots().default}
//     </div>
//   )
// }

// //   
// // // 雷，不能這樣寫，因為 babel-plugin-jsx-vue-functional
// // // 會檢查是不是有 html tag, 有才會做轉換，沒有就當一般的 function
// // // const PermissionComponent = ({ props, slots }) => {
// // //   const { permissionCode } = props;
// // //   if (permissionCode === 0) {
// // //     return null;
// // //   }
// // //   return slots().default;
// // // }; */


// export default {
//   render() {
//     return (
//        <section>
//         <PermissionComponent permissionCode={0}>
//           <h2>PermissionCode 0</h2>
//         </PermissionComponent>
//         <PermissionComponent permissionCode={1}>
//           <h2>PermissionCode 1</h2>
//         </PermissionComponent>
//       </section>
//     );
//   },
// };
