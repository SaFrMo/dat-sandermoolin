import Vue from 'vue'
import App from './App'
import router from './router'

// import components
import MainMenu from './components/MainMenu'

Vue.config.productionTip = false

// components
Vue.component('shining-sun', require('./components/parts/ShiningSun').default)

// register components globally
Vue.component('main-menu', MainMenu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
