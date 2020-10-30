import Vue from 'vue'
import Router from 'vue-router'
import top from '../components/top'
import profile from '../components/profile'
import works from '../components/works'
import contact from '../components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top,
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
    },
    {
      path: '/works',
      name: 'works',
      component: works,
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
    },
  ]
})
