<template>
  <div class="home">
    <toolbar></toolbar>
    <about></about>
    <contact></contact>
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue';
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Toolbar, 
    About,
    Contact
  },
  data() {
    return {
    }
  }
}
</script>

<style>


</style>
