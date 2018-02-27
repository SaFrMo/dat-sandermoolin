import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
// import AboutPage from '@/components/AboutPage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'FrontPage',
            component: FrontPage
        }// ,
        // {
        //     path: '/about',
        //     name: 'About',
        //     component: AboutPage
        // }
    ]
})
