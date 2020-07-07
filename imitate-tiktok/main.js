import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 全局变量
Vue.prototype._global = {
  domain: "http://192.168.6.63:8080/"
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
