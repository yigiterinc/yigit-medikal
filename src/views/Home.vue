<template>
  <div class="home">
    <carousel :perPage="1" :autoplay="true" :autoplayTimeout="5000" :paginationColor="'rgb(213, 207, 198)'">
      <slide>
        <img src="../../public/images/allianzsgiorta-logo.png" alt="">
      </slide>
      <slide>
        <img src="../../public/images/allianzsgiorta-logo.png" alt="">
      </slide>
      <slide>
        <img src="../../public/images/allianzsgiorta-logo.png" alt="">
      </slide>
      <slide>
        <img src="../../public/images/allianzsgiorta-logo.png" alt="">
      </slide>
    </carousel>
    <about></about>
    <contact></contact>
  </div>
</template>

<script>
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Home',
  components: {
    About,
    Contact,
    Carousel,
    Slide
  },
  data() {
    return {
    }
  }
}
</script>

<style>

  .VueCarousel {
    padding-bottom: 2vh;
    box-shadow: 0 8px 6px -6px #9BB0B3;
  }

  .VueCarousel-pagination {
  }
</style>
