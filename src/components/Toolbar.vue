<template>
  <md-toolbar>
    <div class="hidden-hamburger d-block d-sm-none" @click="toggleShowSmallMenu">
      <Menu/>
    </div>

    <h3 class="md-title">
      <router-link to="/">Yiğit Medikal</router-link>
    </h3>

    <div class="small-menu d-block d-sm-none">
      <div class="small-menu-item">Hello</div>
      <div class="small-menu-item">Goodbye</div>
    </div>
    <div class="md-toolbar-section-end">
      <div class="d-none d-sm-block">
        <ToolbarProductsMenu menu-trigger-label="ÜRÜNLER" redirect-base-url="/urunler"/>

        <md-button class="nav-button">HAKKIMIZDA</md-button>
        <md-button class="nav-button">İLETİŞİM</md-button>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import ToolbarProductsMenu from "@/components/ToolbarNavigationMenu";

import Menu from 'vue-material-design-icons/Menu'

export default {
    name: 'Toolbar',
    components: {
      ToolbarProductsMenu,
      Menu
    },
    data() {
      return {
        miniMenuShow: false
      }
    },
    watch: {
      miniMenuShow: function (value) {
        if (value) {
          this.showSmallMenu()
        } else {
          this.hideSmallMenu()
        }
      }
    },
    methods: {
      toggleShowSmallMenu() {
        this.miniMenuShow = !this.miniMenuShow;
      },
      showSmallMenu() {
        const menu = document.getElementsByClassName("small-menu")[0];
        const menuItems = document.getElementsByClassName("small-menu-item");

        menu.classList.add("small-menu-1");
        menu.style.display = "flex"

        for (let i = 0; i < menuItems.length; i++) {
          menuItems[i].classList.add("small-menu-item-1")
          menuItems[i].style.display = "flex"
        }
      },
      hideSmallMenu() {
        const menu = document.getElementsByClassName("small-menu")[0];
        const menuItems = document.getElementsByClassName("small-menu-item");

        menu.style.display = "none";

        for (let i = 0; i < menuItems.length; i++) {
          menuItems[i].style.display = "none";
        }
      }
    }
  }
</script>

<style>

  .small-menu {
    visibility: hidden;
    height: 0;
    width: 0;
  }

  @media only screen and (max-width: 600px) {
    .hidden-hamburger {
      margin-right: 5px;
      margin-left: 5px;
      cursor: pointer;
    }
  }

  .md-title a {
    text-decoration: none !important;
    color: inherit !important;
  }

  .md-title {
    font-weight: 400 !important;
    font-size: 22px !important;
  }

  .nav-button {
    margin: 0 1rem 0 0 !important;
    font-size: 16px !important;
    font-weight: 450 !important;
    height: 40px !important;
  }

  .small-menu-1 {
    visibility: visible;
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }

  .small-menu-item-1 {
    width: 100vw;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding-top: 1vh;
    padding-bottom: 1vh;
  }

</style>
