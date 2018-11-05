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
// Vue.prototype.PATH_API = 'http://localhost:5000/api'
Vue.prototype.PATH_API = 'http://localhost:5000/api'

Vue.prototype.PLAYER_NAME = sessionStorage.player_name ? sessionStorage.player_name : 'Alex'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
