import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from './store/store.js'
import * as VueGoogleMaps from 'vue2-google-maps'
import firebase from 'firebase'

Vue.use(VueGoogleMaps, {
  load:{
    key: "AIzaSyBre0sAE_zK3rJcFYStwk9QhfrsJAKazUI"
  },
})


// Initializes the vue app
Vue.config.productionTip = false

firebase.initializeApp({
	apiKey: "AIzaSyC8_ejstiRcI5ujBehV2cCSxZkTmhukRZQ",
    authDomain: "msci342project.firebaseapp.com",
    databaseURL: "https://msci342project.firebaseio.com",
    projectId: "msci342project",
    storageBucket: "msci342project.appspot.com",
    messagingSenderId: "772198509757",
    appId: "1:772198509757:web:07f7412c8eecf9feed5bd4",
    measurementId: "G-0NG36W1XSM"

});


sync(store,router)

new Vue({
  router,
  store,
  render: h => h(App),


}).$mount('#app')
