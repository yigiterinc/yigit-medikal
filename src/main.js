import Vue from 'vue'
import VueCarousel from 'vue-carousel'

import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router'

import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.use(VueCarousel)

import { MdButton, MdToolbar, MdMenu } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdToolbar);
Vue.use(MdButton);
Vue.use(MdMenu)

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
