<template>
  <div>
    <header class="main-header">
      <h1>Todo</h1>
    </header>
    <div class="main">
      <section class="real-app">
        <input type="text" class="add-input" placeholder="接下来要做什么?" @keyup.enter="addTodo" ref="ipt">
        <item
          v-for="todo in todosView"
          :todo="todo"
          :key="todo.content"
          @deleteTodo = "deleteTodo"
          @change-completed = "changeCompleted"
        >
        </item>      
        <tabs
          :left-items-count = "leftItemsCount"
          :is-have-completed = "isHaveCompleted"
          :filter="filter"
          @clear-completed = "clearCompleted"
          @toggle-filter ="toggleFilter"
        >
        </tabs>
      </section>
    </div>
    <footer id="footer">
      <span>written by Jacky</span>
    </footer>
  </div>
</template>
<script>
import Tabs from '@/components/Tabs'
import Item from '@/components/Item'
export default {
  // el: '#app',
  data() {
    return {
      todos: [
        /* {
              content:'eating',
              isCompleted: true,              
            },
            {
              content:'eating2',
              isCompleted: false
            } */
      ],
      filter: "All"
    };
  },
  components:{
    Tabs,
    Item
  },
  updated(){
    // localStorage.setItem("todos", JSON.stringify(this.todos))
    // localStorage.setItem("filter", JSON.stringify(this.filter))
    let firebaseRef = firebase.database().ref()
        firebaseRef.child("todos").set(this.todos)
        firebaseRef.child("filter").set(this.filter)
    
  },
  beforeMount(){
    // if(localStorage.getItem("filter")){
    //   this.todos = JSON.parse(localStorage.getItem("todos"))
    //   this.filter = localStorage.getItem("filter")
    // }
    

        let firebaseRef = firebase.database().ref()
        firebaseRef.child("todos").once('value').then(snapshot => this.todos=snapshot.val())
        firebaseRef.child("filter").once('value').then(snapshot => this.filter=snapshot.val())
  },
  computed: {
    leftItemsCount() {
      //return this.todos.filter(v=>v.isCompleted === false).length
      return this.todos.reduce((t, v) => {
        if (v.isCompleted === false) {
          t = t + 1;
        }
        return t;
      }, 0);
    },
    isHaveCompleted() {
      //return this.todos.filter(v=>v.isCompleted === true).length>0
      return this.todos.some(v => v.isCompleted === true);
    },
    todosView() {
      if (this.filter === "All") {
        return this.todos;
      } else if (this.filter === "Active") {
        return this.todos.filter(v => v.isCompleted === false);
      } else {
        return this.todos.filter(v => v.isCompleted === true);
      }
    }
  },
  methods: {
    addTodo() {
      //console.log(e.target.value)
      this.todos.unshift({
        content: this.$refs.ipt.value,
        isCompleted: false
      });
      this.$refs.ipt.value = "";
    },
    deleteTodo(todo) {
      console.log(todo);
      // this.todos.splice(this.todos.findIndex( item => todo===item ),1)
      this.todos = this.todos.filter(item => item !== todo);
    },
    changeCompleted(todo) {
      // console.log(this.todos.indexOf(todo))

      this.todos[this.todos.indexOf(todo)].isCompleted = !this.todos[
        this.todos.indexOf(todo)
      ].isCompleted;

      // this.todos = this.todos.map( item => {
      //   if(todo === item){
      //     item.isCompleted = !item.isCompleted
      //   }
      //   return item
      // } )
    },
    clearCompleted() {
      this.todos = this.todos.filter(v => v.isCompleted === false);
    },
    toggleFilter(state) {
      this.filter = state;
    }
  }
};
</script>
<style lang="scss" scoped>
.main-header {
  text-align: center;
  h1 {
    font-size: 100px;
    color: rgba(175, 47, 46, 0.4);
    font-weight: 700;
    margin: 20px;
  }
}
#footer{
  margin-top: 40px;
  text-align: center;
  color: #bfbfbf;
  font-size: 10px;text-shadow: 0 1px 0 rgba(#999,0.6);
}
.real-app {
  width: 640px;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(#666, 0.1);
  input.add-input {
    width: 100%;
    font-size: 24px;
    line-height: 1.4em;
    border: 0;
    outline: none;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    padding: 16px 16px 16px 60px;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
