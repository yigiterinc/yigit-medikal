<template>
  <md-toolbar>
    <h3 class="md-title"><router-link to="/">Yiğit Medikal</router-link></h3>
    <div class="md-toolbar-section-end">
      <md-menu md-size="auto" md-align-trigger>
        <md-button class="nav-button" md-menu-trigger>ÜRÜNLER</md-button>

        <md-menu-content>
          <md-menu-item v-for="(link, index) in menuContent"
                        @click="redirectTo(link.url())"
                        :key="index">
            {{ link.name }}
          </md-menu-item>
        </md-menu-content>
      </md-menu>

      <md-button class="nav-button">HAKKIMIZDA</md-button>
      <md-button class="nav-button">İLETİŞİM</md-button>
    </div>
  </md-toolbar>
</template>

<script>
  import { TYPES } from "@/data/types"

  export default {
    name: 'Toolbar',
    components: {

    },
    data() {
      return {
        show: false,
        showProducts: false,
        menuStyles: {
          marginTop: "10px",
          cursor: "pointer"
        },
        menuContent: [
          {
            name: "Varis Çorapları",
            url: () => '/urunler/' + TYPES.VARIS_CORABI.name
          },
          {
            name: "Tansiyon Aletleri",
            url: () => '/urunler/' + TYPES.TANSIYON_ALETI.name
          },
          {
            name: "Tabanlıklar",
            url: () => '/urunler/' + TYPES.TABANLIK.name
          },
          {
            name: "Ortopedik Ürünler",
            url: () => '/urunler/' + TYPES.ORTOPEDIK_URUNLER.name
          },
          {
            name: "Lenf Ödem Ürünleri",
            url: () => '/urunler/' + TYPES.LENF_ODEM_URUNLERI.name
          },
          {
            name: "Fizik Tedavi Ürünleri",
            url: () => '/urunler/' + TYPES.FIZIK_TEDAVI_URUNLERI.name
          },
          {
            name: "Solunum Cihazları",
            url: () => '/urunler/' + TYPES.SOLUNUM_CIHAZI.name
          }
        ]
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

  .md-toolbar a {
    text-decoration: none !important;
    color: inherit !important;
  }

  .md-title {
    font-weight: 450 !important;
    font-size: 22px !important;
  }

  .md-toolbar-section-end a {
    text-decoration: none !important;
    color: inherit !important;
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