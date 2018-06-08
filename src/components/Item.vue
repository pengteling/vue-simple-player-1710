<template>
  <div class="todo-item" :class="todo.isCompleted? 'completed':'' ">
      <input         
        type="checkbox" 
        class="toggle"
        :checked="todo.isCompleted"
        @change="handlerCheck"       
                    
      > 
      <!-- v-model="todo.isCompleted"    -->
      <label>{{ todo.content }}</label>
      <button @click="deleteTodo" class="destory">X</button>
    </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo() {
      this.$emit("deleteTodo", this.todo);
    },
    handlerCheck() {
      console.log("handlerCheck");
      this.$emit("change-completed", this.todo);
    }
  }
};
</script>
<style lang="scss" >
.todo-item {
  cursor: pointer;
  font-size: 24px;
  line-height: 36px;
  padding: 12px 0;
  border-bottom: 1px solid #ededed;
  position: relative;
  .destory {
    position: absolute;
    right: 60px;
    top: 15px;
    font-size: 9pt;
  }
  &.completed {
    color: #d9d9d9;
    text-decoration: line-through;
  }
}
</style>

