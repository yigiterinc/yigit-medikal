<template>
  <md-menu md-size="auto" md-align-trigger :md-close-on-click="true" :md-close-on-select="true">
    <md-button class="nav-button" md-menu-trigger>{{ menuTriggerLabel }}</md-button>

    <md-menu-content>
      <md-menu-item v-for="(link, index) in content"
                    :key="index">
        <router-link :to="link.url">{{ link.label }}</router-link>
      </md-menu-item>
    </md-menu-content>
  </md-menu>
</template>

<script>
import { TYPES } from "@/data/types";

export default {
  name: 'ToolbarProductsMenu',
  props: {
    menuTriggerLabel: {
      type: String,
      required: true
    },
    redirectBaseUrl: {
      type: String,
      required: true,
      validator: function (value) {
        // To make sure the passed url is a valid route
        return ['/', '/urunler', '/hakkimizda', '/iletisim'].indexOf(value) !== -1;
      }
    },
  },
  data() {
    return {
      content: []
    }
  },
  mounted() {
    Object.values(TYPES).forEach(productType => {
      this.content.push(
          {
            label: productType.label,
            url: `${ this.redirectBaseUrl}/${ productType.url }`
          })
    })
  }
}
</script>

<style>

  .md-theme-default {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .md-menu-item a {
    text-decoration: none !important;
    color: inherit !important;
    font-size: 17px;
  }

  .md-menu-item :hover {
    background-color: #dae7e8;
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

</style>
