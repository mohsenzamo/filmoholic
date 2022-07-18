import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: function () {
      return import('../views/ListView.vue')
    }
  },
  {
    path: '/detaill/:id',
    name: 'detaill',
    component: function () {
      return import('../views/DetaillView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
