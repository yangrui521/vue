<template>
  <ul class="todo-main">
    <todo-item v-for="(todo,index) in todos" :index="index" :todo="todo" :key="todo.id" @deleteTodo="deleteTodo" ></todo-item>
  </ul>
</template>

<script type="text/ecmascript-6">
  import item from './item'
  export default {
    
    name: "todo-list",
    props:{
      todos:Array,
    },
    components:{
      "todo-item":item
    },
    methods:{
      deleteTodo(index){
        this.$emit('deleteTodo',index)
      },
      
    }
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    list-style: none;
  }
  
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  
</style>
