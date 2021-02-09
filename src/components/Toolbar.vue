<template>
  <md-toolbar>
    <h3 class="md-title">Yiğit Medikal</h3>
    <div class="md-toolbar-section-end">
      <dropdown-menu
          v-model="show"
          :hover="true"
          :interactive="false"
          :hover-timeout="100"
          :styles=dropdownStyles
      >
        <router-link class="toolbar-link" to="/urunler">
          Ürünler
        </router-link>
        <div slot="dropdown">
          <router-link :to="link.url()" class="dropdown-item" v-for="(link, index) in dropdownLinks" :key=index>
            {{ link.name }}
          </router-link>
        </div>
      </dropdown-menu>

      <p class="toolbar-link">Hakkımızda</p>
      <p class="toolbar-link">İletişim</p>
    </div>
  </md-toolbar>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import UtilsMixin from '../mixins/UtilsMixin.js'
import DropdownMenu from '@innologica/vue-dropdown-menu'

import { TYPES } from "@/data/types"

export default {
  name: 'Toolbar',
  mixins: [UtilsMixin],
  components: {
    DropdownMenu
  },
  data() {
    return {
      show: false,
      showProducts: false,
      dropdownStyles: {
        marginTop: "10px",
        cursor: "pointer"
      },
      dropdownLinks: [
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
  }
}


</script>

<style>

.md-toolbar-section-end .toolbar-link {
  margin-right: 2rem;
  margin-bottom: 0px;
  font-size: 18px;
}

.md-toolbar-section-end a {
  text-decoration: none !important;
  color: inherit !important;
}

.md-toolbar-section-end .toolbar-link:hover {
  cursor: pointer;
}

</style>