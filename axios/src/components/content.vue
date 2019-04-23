<template>
  <div class="row">
    <h3 v-if="fristShow">请输入查询数据</h3>
    <p v-else-if="loading"><strong>loading</strong></p>
    <p v-else-if="errorFalg"><strong>{{errorMsg}}</strong></p>
    <div v-else class="card" v-for="item in items" :key="item.node_id">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{item.login}}</p>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    name: "row-content",
    data(){
      return {
        fristShow:true,
        loading:false,
        errorFalg:false,
        errorMsg:"错了",
        items:[]
      }
    },
    mounted() {
      PubSub.subscribe('row-header',async (msg,data)=>{
        this.fristShow=false
        this.loading=true
        
        const url=`https://api.github.com/search/users?q=${data}`
        try {
          const response=await axios.get(url)
          console.log(response.data.items)
          this.items=response.data.items
        }catch (e) {
          this.errorFalg=true
          this.errorMsg=e
        }
        this.loading=false
        
      })
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }
  
  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }
  
  .card-text {
    font-size: 85%;
  }
</style>
