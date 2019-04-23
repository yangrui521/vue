<template>
    <p>
      <!--用户的id是{{$route.params.id}}-->
      用户的id是{{id}}
      <router-view></router-view>
    </p>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "user",
        props:["id"]
    }
</script>

<style  scoped>

</style>
