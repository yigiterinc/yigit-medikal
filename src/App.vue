<template>
  <div id="app" :style="{ backgroundColor: 'rgba(218, 231, 232, 70%)'}">
    <toolbar></toolbar>
    <router-view/>
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar'

  export default {
    name: "App",
    components: {
      Toolbar
    },
    data() {
      return {
      }
    }
  }
</script>

<style>
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100%;
  }
</style>
