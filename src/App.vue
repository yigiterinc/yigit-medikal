<template>
  <div id="app" :style="globalStyle">
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
        globalStyle: {
          backgroundColor: "#dae7e8"
        }
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
