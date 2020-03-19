import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BackToTop from 'vue-backtotop'

Vue.use(router)
Vue.use(BackToTop)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')





