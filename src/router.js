import { createRouter, createWebHashHistory } from 'vue-router'

import FavoritesView from './views/FavoritesView.vue'
import HomeView from './views/HomeView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: FavoritesView,
      path: '/favorites'
    },
    {
      component: HomeView,
      path: '/'
    }
  ]
})