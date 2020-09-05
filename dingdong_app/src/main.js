import Vue from 'vue'
import './plugins/vant.js'
import App from './App.vue'
import router from "./router";
import store from './store'


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
