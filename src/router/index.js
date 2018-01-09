import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'FrontPage',
            component: FrontPage
        }
    ]
})
