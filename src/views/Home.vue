<template>
  <div class="home">
    <md-toolbar class="md-transparent">
      <h3 class="md-title">Yiğit Medikal</h3>
      <div class="md-toolbar-section-end">
        <p @click="redirectTo('urunler')">Ürünler</p>
        <p>Hakkımızda</p>
        <p>İletişim</p>
      </div>
    </md-toolbar>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {

    }
  },
  methods: {
    redirectTo: function (endpoint) {
      return this.$router.push(endpoint);
    }
  }

}
</script>

<style>

  .home .md-toolbar-section-end a, p {
    margin-right: 2rem;
    font-size: 17px;
    text-decoration: none;
  }

</style>
