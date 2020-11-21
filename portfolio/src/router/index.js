import Vue from 'vue/dist/vue.esm.js'
import Router from 'vue-router'
import top from '../components/top'
import profile from '../components/profile'
import works from '../components/works'
import contact from '../components/contact'
import contactForm from '../components/contactForm'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 160}
    }
  },
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
    {
      path: '/contactForm',
      name: 'contactForm',
      component: contactForm,
    },
  ],
})
