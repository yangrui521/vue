<!--应用的根组件-->

<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @addTodo="addTodo"></todo-header>
        <!--父向子传值  自定义属性，交给vue管理 加：-->
        <todo-list :todos="todos" @deleteTodo="deleteTodo" ></todo-list>
        <todo-footer :todos="todos" @computedCol="computedCol"></todo-footer>
      </div>
    </div>
  
  </div>
</template>

<script>
import header from './components/header'
import footer from './components/footer'
import list from './components/list'

export default {
  name: 'App',
  data(){
    return {
      todos:[
        {
          id:0,
          text:"吃饭xxxx",
          completed:false
        },
        {
          id:1,
          text:"睡觉",
          completed:false
        },
        {
          id:2,
          text:"敲代码",
          completed:false
        },
        {
          id:3,
          text:"打篮球",
          completed:false
        },
        {
          id:4,
          text:"吃把鸡",
          completed:false
        }
      ]
    }
  },
  components: {
    "todo-header":header,
    "todo-list":list,
    "todo-footer":footer,
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    computedCol(flag){
      this.todos.forEach((item)=>{
         item.completed=flag
      })
    }
  }
}
</script>

<style>

.todo-container{
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
