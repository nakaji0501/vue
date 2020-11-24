import Vue from 'vue'
import Router from 'vue-router'
import top from '../view/top'
import profile from '../view/profile'
import works from '../view/works'
import contact from '../view/contact'
import contactForm from '../view/contactForm'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
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
