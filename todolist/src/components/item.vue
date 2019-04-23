<template>
  <!--<li @mouseenter="handelMouse('enter')" @mouseleave="handelMouse('leave')" :class="{highlight:highlight}">-->
  <li @mouseenter="isShow=!isShow" @mouseleave="isShow=!isShow" :class="{highlight:isShow}">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <!--<input type="checkbox" />-->
      <span>{{todo.text}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "todo-item",
    props:{
      todo:Object,
      index:Number
    },
    data(){
      return {
        isShow:false,
        // highlight:false
      }
      
    },
    methods:{
      // handelMouse(flag){
      //   if(flag==='enter'){
      //     // this.highlight=true
      //     this.isShow=true
      //   }else if(flag === 'leave'){
      //     // this.highlight=false
      //     this.isShow=false
      //   }
      // }
      deleteTodo(){
        console.log(this.index)
        this.$emit('deleteTodo',this.index)
      },
      
      
    }
  }
</script>

<style scoped>
  li.highlight{
    background: pink;
  }
  
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  
  li label {
    float: left;
    cursor: pointer;
  }
  
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  
  li button {
    float: right;
    margin-top: 3px;
  }
  
  li:before {
    content: initial;
  }
  
  li:last-child {
    border-bottom: none;
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
