import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router'

import { MdButton, MdToolbar } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdToolbar);
Vue.use(MdButton);

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
