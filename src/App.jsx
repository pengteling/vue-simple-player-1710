const v = 123 
export default {
  name : 'App',
  data(){
    return {
      count: 0,
      isShow:false,
      list:[1,2,3,4]
    }
  },
  methods:{
    do(){
      console.log("do")
      this.count ++
    }
  },
  render(){
    // return h('div','text')
    return (
      <div>
        <p>test - { v }</p>
        <div onClick={this.do} >count: { this.count } </div>
        <p v-show={this.isShow}>jsx v-show</p>
        <ul>
          {
            this.list.map((item) => {
              return (
                <li key={item}>{item}</li>
              )
            })
          }
        </ul>
        <input type="text" v-model={this.count} />
      </div>
    )
  }
}