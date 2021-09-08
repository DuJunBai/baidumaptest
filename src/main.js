import 'bootstrap/dist/css/bootstrap.min.css'
import BaiduMap from 'vue-baidu-map'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(BaiduMap, {
  ak: 'z35G6E5cSbdswS79YwumifAZwqXLmokb'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
