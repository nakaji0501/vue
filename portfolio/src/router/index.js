import Vue from 'vue'
import Router from 'vue-router'
import top from '../components/top.vue'
import profile from '../components/profile.vue'
import skills from '../components/skills.vue'
import works from '../components/works.vue'

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
      path: '/skills',
      name: 'skills',
      component: skills,
    },
    {
      path: '/works',
      name: 'works',
      component: works,
    },
  ]
})
