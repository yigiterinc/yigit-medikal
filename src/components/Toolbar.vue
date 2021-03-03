<template>
  <md-toolbar>
    <h3 class="md-title">
      <router-link to="/">Yiğit Medikal</router-link>
    </h3>
    <div class="md-toolbar-section-end">
      <ToolbarProductsMenu menu-trigger-label="ÜRÜNLER" redirect-base-url="/urunler"/>

      <md-button class="nav-button">HAKKIMIZDA</md-button>
      <md-button class="nav-button">İLETİŞİM</md-button>
    </div>
  </md-toolbar>
</template>

<script>
import ToolbarProductsMenu from "@/components/ToolbarNavigationMenu";

export default {
    name: 'Toolbar',
    components: {
      ToolbarProductsMenu
    },
    data() {
      return {
        showProducts: false
      }
    },
    methods: {
      redirectTo(path) {
        this.$router.push(path);
      }
    }
  }
</script>

<style>

  .md-title a {
    text-decoration: none !important;
    color: inherit !important;
  }

  .md-title {
    font-weight: 450 !important;
    font-size: 22px !important;
  }

  .nav-button {
    margin: 0 1rem 0 0 !important;
    font-size: 18px !important;
    font-weight: 450 !important;
    height: 40px !important;
  }

  .md-list-item-container {
    font-size: 20px !important;
  }

</style>
