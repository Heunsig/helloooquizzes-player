import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import axios from 'axios'
import lodash from 'lodash'
import VueAxios from 'vue-axios'

import App from './App.vue'
 
Vue.use(VueAxios, axios)
Vue.prototype._ = lodash

Vue.config.productionTip = false

Vue.prototype.APP_NAME = 'Hellooo Quizzes'
Vue.prototype.PATH_API = 'https://helloooquizzes-admin.herokuapp.com/api'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
