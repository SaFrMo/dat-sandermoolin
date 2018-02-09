import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
import BreakThisSite from '@/components/BreakThisSite'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'FrontPage',
            component: FrontPage
        },
        {
            path: '/broken',
            name: 'BreakThisSite',
            component: BreakThisSite
        }
    ]
})
