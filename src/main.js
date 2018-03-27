import Vue from 'vue'
import App from './App'
import router from './router'

// import components
import MainMenu from './components/MainMenu'
import ADiv from 'fh-components/a-div'

// import directives
import FullHeight from 'fh-components/v-full-height'

Vue.config.productionTip = false

// components
Vue.component('planet-earth', require('./components/parts/PlanetEarth').default)
Vue.component('main-menu', MainMenu)
Vue.component('a-div', ADiv)

// directives
Vue.directive('full-height', FullHeight)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
