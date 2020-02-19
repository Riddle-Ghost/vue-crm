import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.filter('date', dateFilter)

Vue.use(Vuelidate)
Vue.use(messagePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyC7hXKYQVVk85Qy4XO_zr3D-5oBez0neQU",
  authDomain: "vue-crm-938f2.firebaseapp.com",
  databaseURL: "https://vue-crm-938f2.firebaseio.com",
  projectId: "vue-crm-938f2",
  storageBucket: "vue-crm-938f2.appspot.com",
  messagingSenderId: "346931006106",
  appId: "1:346931006106:web:a70169c30ee0cbba47ed23",
  measurementId: "G-48C1EV64T2"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

