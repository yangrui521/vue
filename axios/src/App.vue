<template>
  <div id="app">
    <div class="container">
      <row-header></row-header>
      <row-content></row-content>
    </div>
  </div>
</template>

<script>
import header from './components/header'
import content from './components/content'

export default {
  name: 'App',
  components: {
    "row-header":header,
    "row-content":content,
    
  }
}
</script>

<style>

</style>
