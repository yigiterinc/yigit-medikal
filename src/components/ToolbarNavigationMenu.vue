<template>
  <md-menu md-size="auto" md-align-trigger :md-close-on-click="true" :md-close-on-select="true">
    <md-button class="nav-button" md-menu-trigger>
      {{ menuTriggerLabel }} <chevron-down class="ml-1"/>
    </md-button>

    <md-menu-content>
      <router-link v-for="(link, index) in content"
                   :key="index" :to="link.url">
        <md-menu-item>
          {{ link.label }}
        </md-menu-item>
      </router-link>
    </md-menu-content>
  </md-menu>
</template>

<script>
import { TYPES } from "@/data/types";

import ChevronDown from 'vue-material-design-icons/ChevronDown'

export default {
  name: 'ToolbarProductsMenu',
  components: {
    ChevronDown
  },
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

  .md-list.md-theme-default .router-link-active .md-list-item-content {
    color: inherit !important;
  }


  .md-list-item-container {
    font-size: 17px !important;
  }

  .md-menu-item :hover {
    text-decoration: underline;
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
