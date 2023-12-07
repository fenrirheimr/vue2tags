import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuetify from 'vuetify'

import '@/styles/_mixin.scss'
import '@/styles/_global.scss'
import 'vuetify/dist/vuetify.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(Vuetify);

new Vue({
  router,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi'
    }
  }),
  render: h => h(App)
}).$mount('#app')
