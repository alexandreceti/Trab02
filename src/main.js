import Vue from 'vue'
import App from './App.vue'
import Routes from './routes'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false

const app = new Vue({
  // el: '#app',
  router: Routes,
  render: h => h(App)
})
app.$mount('#app')
