import { createRouter, createWebHashHistory } from 'vue-router'

import RandomView from './views/RandomVue.vue'
import ContactView from './views/ContactVue.vue'
import HomeView from './views/HomeVue.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: RandomView, path: `/random/` },
    { component: ContactView, path: '/contact' },
    { component: HomeView, path: '/' }
  ]
})
