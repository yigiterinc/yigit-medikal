<template>
  <div class="home">
    <carousel :perPage=imagePerPage
              :autoplay="true"
              :autoplayTimeout=imageChangeTimeInMs
              :paginationColor="'rgb(213, 207, 198)'">
      <slide v-for="(imageLink, index) in sliderImages" :key="index">
        <img :src=imageLink alt="">
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
      imagePerPage: 1,
      imageChangeTimeInMs: 5000,
      sliderImages: [
          "/images/allianzsgiorta-logo.png",
          "/images/allianzsgiorta-logo.png",
          "/images/allianzsgiorta-logo.png",
          "/images/allianzsgiorta-logo.png",
      ]
    }
  }
}
</script>

<style>
  .VueCarousel {
    padding-bottom: 2vh;
    box-shadow: 0 8px 6px -6px #9BB0B3;
  }
</style>
