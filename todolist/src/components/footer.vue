<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="computedCol"/>
    </label>
    <span>
      <span>已完成<i style="color:red;font-size: 20px">{{computedCo}}</i></span> / 全部<i style="color:green;font-size: 20px">{{todos.length}}</i>
        </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "todo-footer",
    props:{
      todos:Array
    },
    computed:{
      computedCo(){
        /*reduce是循环数组的累加器 返回的是结果*/
        return this.todos.reduce((adder,item,index,arr)=>{
          var val = item.completed ? 1:0
          return adder + val
        },0)
      },
      computedCol:{
        get(){
          return (this.computedCo === this.todos.length)&&(this.todos.length)
        },
        set(val){
          this.$emit('computedCol',val)
        }
      }
    }
  }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  
  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  
  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }
</style>
