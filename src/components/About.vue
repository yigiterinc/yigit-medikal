<template>
    <div class="about">
      <b-container class="container-fluid">
        <h1>Hakkımızda</h1>
        <p class="info">
          {{ about }}
        </p>
      </b-container>
    </div>
</template>

<script>
  import About from "@/data/about.js"

  export default {
      name: "About",
      data() {
          return {
              about: ""
          }
      },
      created() {
        this.about = About.about;
      }
  }
</script>

<style >
    .about {
        padding-top: 30px;
        padding-bottom: 30px;
        width: 100%;
        box-shadow: 0 8px 6px -6px #9BB0B3;
    }

    .about h1 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 40px;
    }

    .about .info {
        font-size: 22px;
        letter-spacing: 0.8px;
        line-height: 1.8;
        text-align: center;
        text-align: justify;
    }
</style>