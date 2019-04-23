<template>
	<ul>
    <li>
      id:{{message.id}}
    </li>
    <li>
      title:{{message.title}}
    </li>
    <li>
      text:{{message.text}}
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  
  var data=[
    {id:1,title:"message01",text:"text---1"},
    {id:2,title:"message02",text:"text---2"},
    {id:3,title:"message03",text:"text---3"},
    {id:4,title:"message04",text:"text---4"},
    {id:5,title:"message05",text:"text---5"},
  ]
  export default {
    name: "messageDetail",
    props:["id"],
    data(){
      return {
        message:{}
      }
    },
    mounted() {
      setTimeout(()=>{
        this.message=data.find((item,index)=>{
          return item.id === this.id*1
        })
      },1000)
    },
    watch:{
      $route(){
        setTimeout(()=>{
          this.message=data.find((item,index)=>{
            return item.id === this.id*1
          })
        },1000)
      }
    }
  }
</script>

<style scoped>

</style>
