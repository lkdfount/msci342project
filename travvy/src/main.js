import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from './store/store.js'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load:{
    key: "AIzaSyBre0sAE_zK3rJcFYStwk9QhfrsJAKazUI"
  },
})


// Initializes the vue app
Vue.config.productionTip = false

sync(store,router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
