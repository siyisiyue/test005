import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'normalize.css/normalize.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$bus= new Vue()

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
