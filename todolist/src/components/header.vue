<template>
  <div class="todo-header">
    <input type="text" v-model.trim="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="handleKeyup"/>
  </div>
</template>

<script type="text/ecmascript-6">
  var id = 8
  export default {
    name: "todo-header",
    data(){
      return {
        text:""
      }
    },
    methods:{
      handleKeyup(){
      //往App的todos里面加对象,回车添加
        if(this.text===""){
          alert("请输入数据");
          return;
        }
        const todo={
          text:this.text,
          completed:false,
          id:id++
        }
        //向父组件传递数据
        this.$emit('addTodo',todo)
        //清除input的内容
        this.text=""
      }
    },
  }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
