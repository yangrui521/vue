<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="inputVal"/>
      <button @click="handelC">Search</button>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import PubSub from 'pubsub-js'
  export default {
    name: "row-header",
    data(){
      return{
        inputVal:''
      }
    },
    methods:{
      handelC(){
        PubSub.publish('row-header',this.inputVal)
      }
    },
    
  }
</script>

<style scoped>

</style>
